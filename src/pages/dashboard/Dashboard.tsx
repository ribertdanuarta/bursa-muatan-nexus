
import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { ShipperStats, TransporterStats } from '@/components/dashboard/DashboardStats';
import RecentActivity from '@/components/dashboard/RecentActivity';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const Dashboard = () => {
  const { user, profile } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [shipperStats, setShipperStats] = useState({
    totalCargos: 0,
    activeCargos: 0,
    completedCargos: 0,
    cancelledCargos: 0,
  });
  const [transporterStats, setTransporterStats] = useState({
    totalVehicles: 0,
    activeVehicles: 0,
    totalDeliveries: 0,
    pendingOffers: 0,
  });
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    if (user) {
      loadData();
    }
  }, [user]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      // In a real app, we'd fetch data from Supabase
      // For demo, we'll use mock data
      await new Promise((resolve) => setTimeout(resolve, 500));

      if (profile?.user_type === 'shipper') {
        setShipperStats({
          totalCargos: 12,
          activeCargos: 3,
          completedCargos: 8,
          cancelledCargos: 1,
        });
        
        setActivities([
          {
            id: '1',
            title: 'Elektronik & Perabotan Rumah Tangga',
            description: 'PT. ABC Transport mengajukan penawaran sebesar Rp 2.350.000',
            time: '2 jam yang lalu',
            type: 'cargo',
            status: 'published',
          },
          {
            id: '2',
            title: 'Bahan Bangunan',
            description: 'Status pengiriman diubah menjadi "Dalam Pengiriman"',
            time: '5 jam yang lalu',
            type: 'cargo',
            status: 'in_transit',
          },
          {
            id: '3',
            title: 'Produk Makanan & Minuman',
            description: 'Kendaraan telah mencapai tujuan',
            time: '1 hari yang lalu',
            type: 'cargo',
            status: 'completed',
          },
        ]);
      } else {
        setTransporterStats({
          totalVehicles: 5,
          activeVehicles: 2,
          totalDeliveries: 15,
          pendingOffers: 3,
        });
        
        setActivities([
          {
            id: '1',
            title: 'Penawaran Diterima',
            description: 'PT. XYZ menerima penawaran Anda untuk pengiriman elektronik',
            time: '3 jam yang lalu',
            type: 'cargo',
            status: 'assigned',
          },
          {
            id: '2',
            title: 'Truk Box B 1234 CD',
            description: 'Update lokasi terakhir di Cikampek',
            time: '6 jam yang lalu',
            type: 'vehicle',
          },
          {
            id: '3',
            title: 'Pengiriman Selesai',
            description: 'Muatan furnitur telah diterima oleh PT. Mebel Jaya',
            time: '2 hari yang lalu',
            type: 'cargo',
            status: 'completed',
          },
        ]);
      }
    } catch (error) {
      console.error('Error loading dashboard data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewActivity = (id: string, type: string) => {
    switch (type) {
      case 'cargo':
        navigate(`/cargos/${id}`);
        break;
      case 'vehicle':
        navigate(`/vehicles/${id}`);
        break;
      default:
        break;
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center my-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">
          Selamat datang{profile?.name ? `, ${profile.name}` : ''}! Ini adalah ringkasan aktivitas Anda.
        </p>
      </div>

      {/* Subscription Alert */}
      {(profile?.subscription_package === 'GRATIS' || !profile?.subscription_package) && (
        <Alert className="bg-amber-50 border-amber-200">
          <AlertCircle className="h-4 w-4 text-amber-600" />
          <AlertTitle className="text-amber-800">Paket Gratis</AlertTitle>
          <AlertDescription className="text-amber-700">
            Anda menggunakan paket gratis dengan fitur terbatas. Tingkatkan ke paket berbayar untuk mendapatkan lebih banyak fitur.
            <div className="mt-2">
              <Button size="sm" variant="outline" onClick={() => navigate('/subscription')}>
                Lihat Paket Langganan
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      )}

      {/* Stats Cards */}
      <div>
        {profile?.user_type === 'shipper' ? (
          <ShipperStats stats={shipperStats} />
        ) : (
          <TransporterStats stats={transporterStats} />
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <RecentActivity 
            activities={activities} 
            userType={profile?.user_type as 'shipper' | 'transporter'} 
            onViewActivity={handleViewActivity}
          />
        </div>

        {/* Quick Actions */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Aksi Cepat</CardTitle>
              <CardDescription>
                Akses cepat ke fitur yang sering digunakan
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {profile?.user_type === 'shipper' ? (
                <>
                  <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/cargos/create')}>
                    Buat Muatan Baru
                  </Button>
                  <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/cargos')}>
                    Lihat Semua Muatan
                  </Button>
                </>
              ) : (
                <>
                  <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/map')}>
                    Cari Muatan di Peta
                  </Button>
                  <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/vehicles/create')}>
                    Tambah Armada
                  </Button>
                </>
              )}
              <Button className="w-full justify-start" variant="outline" onClick={() => navigate('/profile')}>
                Edit Profil
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
