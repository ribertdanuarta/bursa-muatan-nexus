
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Package, Clock, CheckCircle, XCircle, AlertTriangle, Truck } from 'lucide-react';

type StatCardProps = {
  title: string;
  value: string | number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    positive?: boolean;
  };
};

const StatCard = ({ title, value, description, icon, trend }: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <div className="h-8 w-8 rounded-md bg-bm-blue-100 p-1 text-bm-blue-600">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div
            className={`mt-2 flex items-center text-xs ${
              trend.positive ? 'text-green-600' : 'text-red-600'
            }`}
          >
            <span
              className={`mr-1 rounded-sm p-0.5 ${
                trend.positive ? 'bg-green-100' : 'bg-red-100'
              }`}
            >
              {trend.positive ? '↑' : '↓'} {Math.abs(trend.value)}%
            </span>
            <span className="text-muted-foreground">{trend.label}</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

type ShipperStatsProps = {
  stats: {
    totalCargos: number;
    activeCargos: number;
    completedCargos: number;
    cancelledCargos: number;
  };
};

export const ShipperStats = ({ stats }: ShipperStatsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Muatan"
        value={stats.totalCargos}
        description="Total muatan yang telah Anda buat"
        icon={<Package className="h-6 w-6" />}
      />
      <StatCard
        title="Muatan Aktif"
        value={stats.activeCargos}
        description="Muatan yang sedang dalam proses"
        icon={<Clock className="h-6 w-6" />}
      />
      <StatCard
        title="Muatan Selesai"
        value={stats.completedCargos}
        description="Muatan yang berhasil dikirim"
        icon={<CheckCircle className="h-6 w-6" />}
      />
      <StatCard
        title="Muatan Dibatalkan"
        value={stats.cancelledCargos}
        description="Muatan yang telah dibatalkan"
        icon={<XCircle className="h-6 w-6" />}
      />
    </div>
  );
};

type TransporterStatsProps = {
  stats: {
    totalVehicles: number;
    activeVehicles: number;
    totalDeliveries: number;
    pendingOffers: number;
  };
};

export const TransporterStats = ({ stats }: TransporterStatsProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <StatCard
        title="Total Armada"
        value={stats.totalVehicles}
        description="Jumlah kendaraan yang terdaftar"
        icon={<Truck className="h-6 w-6" />}
      />
      <StatCard
        title="Armada Aktif"
        value={stats.activeVehicles}
        description="Kendaraan yang sedang beroperasi"
        icon={<Truck className="h-6 w-6" />}
      />
      <StatCard
        title="Total Pengiriman"
        value={stats.totalDeliveries}
        description="Pengiriman yang telah diselesaikan"
        icon={<CheckCircle className="h-6 w-6" />}
      />
      <StatCard
        title="Penawaran Tertunda"
        value={stats.pendingOffers}
        description="Penawaran yang menunggu respon"
        icon={<AlertTriangle className="h-6 w-6" />}
      />
    </div>
  );
};
