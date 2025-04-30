
import { useEffect, useState, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type MapMarker = {
  id: string;
  type: 'cargo' | 'vehicle';
  title: string;
  description: string;
  status?: string;
  lat: number;
  lng: number;
};

const MapComponent = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [markers, setMarkers] = useState<MapMarker[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { user, profile } = useAuth();
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Function to load Leaflet dynamically
    const loadLeaflet = async () => {
      try {
        // Dynamically import Leaflet
        const L = await import('leaflet');
        
        // Import CSS
        await import('leaflet/dist/leaflet.css');
        
        // Check if map container exists and map isn't already initialized
        if (mapRef.current && !mapInstanceRef.current) {
          // Create map instance
          const map = L.map(mapRef.current).setView([-2.5, 118], 5); // Indonesia center
          
          // Add tile layer (OpenStreetMap)
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);
          
          // Store map instance in ref
          mapInstanceRef.current = map;
          
          // Set map as loaded
          setMapLoaded(true);
          
          // Load markers
          await fetchMarkers();
        }
      } catch (error) {
        console.error('Error loading map:', error);
        toast.error('Gagal memuat peta');
        setIsLoading(false);
      }
    };
    
    loadLeaflet();
    
    // Cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  const fetchMarkers = async () => {
    setIsLoading(true);
    try {
      // Fetch cargos with location data
      const { data: cargos, error: cargosError } = await supabase
        .from('cargos')
        .select('id, title, status, pickup_location, destination_location')
        .eq('map_visibility', true)
        .order('created_at', { ascending: false })
        .limit(50);

      if (cargosError) throw cargosError;

      // Fetch vehicles with location data
      const { data: vehicles, error: vehiclesError } = await supabase
        .from('vehicles')
        .select('id, plate_number, vehicle_type, last_known_location')
        .not('last_known_location', 'is', null)
        .order('created_at', { ascending: false })
        .limit(50);

      if (vehiclesError) throw vehiclesError;

      // Process cargo data
      const cargoMarkers = cargos?.map(cargo => {
        // Extract coordinates from PostGIS point (simplified for demo)
        // In a real app, you would properly parse the PostGIS geography type
        const pickupCoords = { lat: -6.2 + Math.random() * 10, lng: 106.8 + Math.random() * 10 };
        
        return {
          id: cargo.id,
          type: 'cargo' as const,
          title: cargo.title || 'Muatan Tanpa Judul',
          description: `Dari ${pickupCoords.lat.toFixed(2)},${pickupCoords.lng.toFixed(2)} ke tujuan`,
          status: cargo.status,
          lat: pickupCoords.lat,
          lng: pickupCoords.lng,
        };
      }) || [];

      // Process vehicle data
      const vehicleMarkers = vehicles?.map(vehicle => {
        // Extract coordinates from PostGIS point (simplified for demo)
        // In a real app, you would properly parse the PostGIS geography type
        const coords = { lat: -6.2 + Math.random() * 10, lng: 106.8 + Math.random() * 10 };
        
        return {
          id: vehicle.id,
          type: 'vehicle' as const,
          title: vehicle.plate_number || 'Kendaraan',
          description: `Tipe: ${vehicle.vehicle_type || 'Tidak diketahui'}`,
          lat: coords.lat,
          lng: coords.lng,
        };
      }) || [];

      // Combine all markers
      const allMarkers = [...cargoMarkers, ...vehicleMarkers];
      setMarkers(allMarkers);

      // Add markers to map if it's loaded
      if (mapLoaded && mapInstanceRef.current) {
        const L = await import('leaflet');
        
        // Clear existing markers
        mapInstanceRef.current.eachLayer((layer: any) => {
          if (layer instanceof L.Marker) {
            mapInstanceRef.current.removeLayer(layer);
          }
        });
        
        // Add new markers
        allMarkers.forEach(marker => {
          // Create icon based on marker type
          const icon = L.divIcon({
            className: '',
            iconSize: [30, 30],
            html: `<div class="flex items-center justify-center w-8 h-8 rounded-full ${
              marker.type === 'cargo' ? 'bg-bm-blue-500' : 'bg-green-500'
            } text-white text-xs font-bold border-2 border-white shadow-md">
              ${marker.type === 'cargo' ? 'C' : 'V'}
            </div>`,
          });
          
          // Create marker
          const markerInstance = L.marker([marker.lat, marker.lng], { icon }).addTo(mapInstanceRef.current);
          
          // Add click handler
          markerInstance.on('click', () => {
            setSelectedMarker(marker);
          });
        });
      }
    } catch (error) {
      console.error('Error fetching markers:', error);
      toast.error('Gagal memuat data peta');
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusBadge = (status?: string) => {
    if (!status) return null;

    let className = '';
    switch (status.toLowerCase()) {
      case 'published':
        className = 'bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200';
        break;
      case 'assigned':
        className = 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200';
        break;
      case 'in_transit':
        className = 'bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200';
        break;
      case 'completed':
        className = 'bg-green-100 text-green-800 hover:bg-green-100 border-green-200';
        break;
      case 'cancelled':
        className = 'bg-red-100 text-red-800 hover:bg-red-100 border-red-200';
        break;
      default:
        className = 'bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200';
    }

    return <Badge className={className}>{status}</Badge>;
  };

  const handleMarkerAction = (markerId: string, type: 'cargo' | 'vehicle') => {
    // In a real app, navigate to the detail page
    toast.info(`Melihat detail ${type === 'cargo' ? 'muatan' : 'kendaraan'}`);
  };

  return (
    <div className="relative h-[calc(100vh-12rem)] min-h-[400px]">
      {/* Map Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-50">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
            <p className="text-bm-blue-900">Memuat peta...</p>
          </div>
        </div>
      )}

      {/* Map Container */}
      <div ref={mapRef} className="w-full h-full rounded-lg shadow-md" />

      {/* Selected Marker Info */}
      {selectedMarker && (
        <Card className="absolute bottom-4 right-4 w-64 shadow-lg overflow-hidden">
          <div className="p-4">
            <div className="flex justify-between items-start">
              <h3 className="font-medium">{selectedMarker.title}</h3>
              <Button
                variant="ghost"
                size="sm"
                className="h-6 w-6 p-0"
                onClick={() => setSelectedMarker(null)}
              >
                ×
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-1">{selectedMarker.description}</p>
            <div className="flex items-center justify-between mt-2">
              {selectedMarker.type === 'cargo' && getStatusBadge(selectedMarker.status)}
              <Button
                size="sm"
                onClick={() => handleMarkerAction(selectedMarker.id, selectedMarker.type)}
              >
                Lihat Detail
              </Button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
};

export default MapComponent;
