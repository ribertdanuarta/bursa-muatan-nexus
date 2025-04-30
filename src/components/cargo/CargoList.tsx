
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Package,
  MapPin,
  Calendar,
  Clock,
  Truck,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
} from 'lucide-react';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type Cargo = {
  id: string;
  title: string;
  status: string;
  pickup_address: string;
  destination_address: string;
  cargo_type: string;
  vehicle_type: string;
  weight_kg: number;
  price_budget: number;
  pickup_deadline: string;
  delivery_deadline: string;
  created_at: string;
  distance_km: number;
  total_offers: number;
};

export default function CargoList() {
  const [cargos, setCargos] = useState<Cargo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      fetchCargos();
    }
  }, [user]);

  const fetchCargos = async () => {
    setIsLoading(true);
    try {
      // For the demo, we'll simulate fetching from Supabase
      // In a real app, you would query the actual cargos table
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Demo data
      const demoData: Cargo[] = [
        {
          id: '1',
          title: 'Elektronik & Perabotan Rumah Tangga',
          status: 'published',
          pickup_address: 'Jalan Sudirman No. 123, Jakarta Pusat',
          destination_address: 'Jalan Asia Afrika No. 456, Bandung',
          cargo_type: 'general',
          vehicle_type: 'box',
          weight_kg: 500,
          price_budget: 2500000,
          pickup_deadline: '2023-06-20T10:00:00',
          delivery_deadline: '2023-06-21T17:00:00',
          created_at: '2023-06-15T08:30:00',
          distance_km: 150,
          total_offers: 3,
        },
        {
          id: '2',
          title: 'Bahan Bangunan',
          status: 'assigned',
          pickup_address: 'Jalan Gatot Subroto No. 789, Jakarta Selatan',
          destination_address: 'Jalan Diponegoro No. 321, Yogyakarta',
          cargo_type: 'construction',
          vehicle_type: 'dump_truck',
          weight_kg: 3000,
          price_budget: 5000000,
          pickup_deadline: '2023-06-22T09:00:00',
          delivery_deadline: '2023-06-23T16:00:00',
          created_at: '2023-06-16T10:15:00',
          distance_km: 450,
          total_offers: 5,
        },
        {
          id: '3',
          title: 'Produk Makanan & Minuman',
          status: 'in_transit',
          pickup_address: 'Jalan Hayam Wuruk No. 234, Jakarta Barat',
          destination_address: 'Jalan Malioboro No. 567, Yogyakarta',
          cargo_type: 'food_beverage',
          vehicle_type: 'refrigerated_truck',
          weight_kg: 1200,
          price_budget: 3500000,
          pickup_deadline: '2023-06-18T08:00:00',
          delivery_deadline: '2023-06-19T14:00:00',
          created_at: '2023-06-14T09:45:00',
          distance_km: 450,
          total_offers: 4,
        },
        {
          id: '4',
          title: 'Furnitur Kantor',
          status: 'completed',
          pickup_address: 'Jalan MH Thamrin No. 345, Jakarta Pusat',
          destination_address: 'Jalan Ahmad Yani No. 678, Surabaya',
          cargo_type: 'furniture',
          vehicle_type: 'box',
          weight_kg: 800,
          price_budget: 4200000,
          pickup_deadline: '2023-06-12T10:30:00',
          delivery_deadline: '2023-06-14T17:30:00',
          created_at: '2023-06-10T11:20:00',
          distance_km: 780,
          total_offers: 6,
        },
        {
          id: '5',
          title: 'Barang Retail',
          status: 'cancelled',
          pickup_address: 'Jalan Jendral Sudirman No. 456, Jakarta Selatan',
          destination_address: 'Jalan Panglima Sudirman No. 789, Surabaya',
          cargo_type: 'retail',
          vehicle_type: 'van',
          weight_kg: 350,
          price_budget: 2800000,
          pickup_deadline: '2023-06-25T09:30:00',
          delivery_deadline: '2023-06-26T15:30:00',
          created_at: '2023-06-17T14:10:00',
          distance_km: 780,
          total_offers: 0,
        },
      ];
      
      setCargos(demoData);
    } catch (error) {
      console.error('Error fetching cargos:', error);
      toast.error('Gagal memuat data muatan');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAction = (action: string, cargoId: string) => {
    switch (action) {
      case 'view':
        navigate(`/cargos/${cargoId}`);
        break;
      case 'edit':
        navigate(`/cargos/edit/${cargoId}`);
        break;
      case 'delete':
        // In a real app, you'd show a confirmation dialog
        toast.warning('Fitur hapus muatan belum tersedia');
        break;
      default:
        break;
    }
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200';
      case 'assigned':
        return 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200';
      case 'in_transit':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200';
      case 'completed':
        return 'bg-green-100 text-green-800 hover:bg-green-100 border-green-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 hover:bg-red-100 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'published':
        return 'Dipublikasi';
      case 'assigned':
        return 'Ditugaskan';
      case 'in_transit':
        return 'Dalam Pengiriman';
      case 'completed':
        return 'Selesai';
      case 'cancelled':
        return 'Dibatalkan';
      default:
        return status;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">Daftar Muatan</h2>
        <Button onClick={() => navigate('/cargos/create')}>Buat Muatan Baru</Button>
      </div>

      {isLoading ? (
        <div className="flex justify-center my-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
        </div>
      ) : cargos.length === 0 ? (
        <Card className="text-center p-12">
          <CardContent>
            <Package className="h-16 w-16 mx-auto text-gray-300 mb-4" />
            <CardTitle>Belum ada muatan</CardTitle>
            <CardDescription className="mt-2">
              Mulai buat muatan baru untuk dipublikasikan di marketplace
            </CardDescription>
            <Button className="mt-6" onClick={() => navigate('/cargos/create')}>
              Buat Muatan Baru
            </Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cargos.map((cargo) => (
            <Card key={cargo.id} className="overflow-hidden">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <div>
                    <Badge className={getStatusBadgeClass(cargo.status)}>
                      {getStatusLabel(cargo.status)}
                    </Badge>
                    <CardTitle className="mt-2 text-lg">{cargo.title}</CardTitle>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Aksi Muatan</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={() => handleAction('view', cargo.id)}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>Lihat Detail</span>
                      </DropdownMenuItem>
                      {(cargo.status === 'published' || cargo.status === 'draft') && (
                        <DropdownMenuItem onClick={() => handleAction('edit', cargo.id)}>
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Muatan</span>
                        </DropdownMenuItem>
                      )}
                      {(cargo.status === 'published' || cargo.status === 'draft') && (
                        <DropdownMenuItem onClick={() => handleAction('delete', cargo.id)}>
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Hapus Muatan</span>
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardHeader>
              <CardContent className="pb-2">
                <div className="space-y-2 text-sm">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-bm-blue-600" />
                    <div className="flex-1">
                      <p className="font-medium">Lokasi Jemput:</p>
                      <p className="text-gray-600">{cargo.pickup_address}</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 mt-0.5 text-red-500" />
                    <div className="flex-1">
                      <p className="font-medium">Tujuan:</p>
                      <p className="text-gray-600">{cargo.destination_address}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Truck className="h-4 w-4 text-gray-500" />
                    <p>
                      <span className="font-medium">Jenis:</span>{' '}
                      {cargo.cargo_type === 'general' ? 'Umum' : 
                       cargo.cargo_type === 'construction' ? 'Bahan Bangunan' :
                       cargo.cargo_type === 'food_beverage' ? 'Makanan & Minuman' :
                       cargo.cargo_type === 'furniture' ? 'Furnitur' :
                       cargo.cargo_type === 'retail' ? 'Retail' : 
                       cargo.cargo_type}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-500" />
                    <p>
                      <span className="font-medium">Deadline Pickup:</span>{' '}
                      {formatDate(cargo.pickup_deadline)}
                    </p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="pt-2 flex justify-between items-center border-t">
                <div>
                  <p className="text-sm font-medium">Budget: {formatCurrency(cargo.price_budget)}</p>
                  <p className="text-xs text-gray-500">Jarak: ~{cargo.distance_km} km</p>
                </div>
                {cargo.status === 'published' && (
                  <Badge variant="outline" className="border-bm-blue-300 text-bm-blue-600">
                    {cargo.total_offers} penawaran
                  </Badge>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
