
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Clock, CheckCircle, XCircle, TrendingUp, Package, User, Truck, MapPin } from 'lucide-react';

type ActivityItemProps = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: string;
  status?: string;
  onClick?: () => void;
};

const ActivityItem = ({ title, description, time, type, status, onClick }: ActivityItemProps) => {
  const navigate = useNavigate();

  // Determine icon based on activity type
  const getIcon = () => {
    switch (type) {
      case 'cargo':
        return <Package size={18} />;
      case 'vehicle':
        return <Truck size={18} />;
      case 'driver':
        return <User size={18} />;
      case 'location':
        return <MapPin size={18} />;
      default:
        return <Clock size={18} />;
    }
  };

  // Status badge colors
  const getStatusBadge = () => {
    if (!status) return null;

    let badgeProps = {
      variant: 'outline' as const,
      className: '',
    };

    switch (status.toLowerCase()) {
      case 'published':
        badgeProps.className = 'bg-blue-100 text-blue-800 hover:bg-blue-100 border-blue-200';
        break;
      case 'assigned':
        badgeProps.className = 'bg-amber-100 text-amber-800 hover:bg-amber-100 border-amber-200';
        break;
      case 'in_transit':
        badgeProps.className = 'bg-purple-100 text-purple-800 hover:bg-purple-100 border-purple-200';
        break;
      case 'completed':
        badgeProps.className = 'bg-green-100 text-green-800 hover:bg-green-100 border-green-200';
        break;
      case 'cancelled':
        badgeProps.className = 'bg-red-100 text-red-800 hover:bg-red-100 border-red-200';
        break;
      default:
        badgeProps.className = 'bg-gray-100 text-gray-800 hover:bg-gray-100 border-gray-200';
    }

    return <Badge {...badgeProps}>{status}</Badge>;
  };

  return (
    <div 
      className="flex items-start space-x-4 p-4 hover:bg-gray-50 rounded-md cursor-pointer transition-colors"
      onClick={onClick}
    >
      <div className="mt-0.5 rounded-full bg-bm-blue-100 p-2 text-bm-blue-600">
        {getIcon()}
      </div>
      <div className="flex-1 space-y-1">
        <div className="flex items-center justify-between">
          <p className="font-medium">{title}</p>
          <p className="text-xs text-bm-gray-500">{time}</p>
        </div>
        <p className="text-sm text-bm-gray-500">{description}</p>
        <div className="flex items-center space-x-2">
          {getStatusBadge()}
        </div>
      </div>
    </div>
  );
};

type Activity = {
  id: string;
  title: string;
  description: string;
  time: string;
  type: string;
  status?: string;
};

type RecentActivityProps = {
  activities: Activity[];
  userType: 'shipper' | 'transporter';
  onViewActivity?: (id: string, type: string) => void;
};

const RecentActivity = ({ activities, userType, onViewActivity }: RecentActivityProps) => {
  const navigate = useNavigate();
  const [displayCount, setDisplayCount] = useState(5);

  const handleViewMore = () => {
    setDisplayCount((prev) => prev + 5);
  };

  const handleActivityClick = (id: string, type: string) => {
    if (onViewActivity) {
      onViewActivity(id, type);
    } else {
      // Default navigation
      switch (type) {
        case 'cargo':
          navigate(`/cargos/${id}`);
          break;
        case 'vehicle':
          navigate(`/vehicles/${id}`);
          break;
        case 'driver':
          navigate(`/drivers/${id}`);
          break;
        default:
          break;
      }
    }
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Aktivitas Terbaru</CardTitle>
            <CardDescription>
              {userType === 'shipper' 
                ? 'Status muatan dan penawaran terbaru' 
                : 'Status pengiriman dan penawaran terbaru'}
            </CardDescription>
          </div>
          <TrendingUp className="h-4 w-4 text-muted-foreground" />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {activities.length === 0 ? (
          <div className="p-6 text-center">
            <p className="text-muted-foreground">Belum ada aktivitas</p>
          </div>
        ) : (
          <>
            <div className="divide-y divide-bm-gray-100">
              {activities.slice(0, displayCount).map((activity) => (
                <ActivityItem
                  key={activity.id}
                  {...activity}
                  onClick={() => handleActivityClick(activity.id, activity.type)}
                />
              ))}
            </div>
            {activities.length > displayCount && (
              <div className="p-4 text-center">
                <Button variant="outline" onClick={handleViewMore}>
                  Lihat Lainnya
                </Button>
              </div>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default RecentActivity;
