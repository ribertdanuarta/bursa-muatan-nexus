
import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import {
  Home,
  Menu,
  Package,
  Truck,
  MapPin,
  Bell,
  User,
  LogOut,
  Settings,
  CreditCard,
  Star,
} from 'lucide-react';
import { cn } from '@/lib/utils';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  path: string;
  active?: boolean;
  onClick?: () => void;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon,
  label,
  path,
  active = false,
  onClick,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
    if (onClick) onClick();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        'w-full flex items-center space-x-3 px-3 py-2 rounded-md text-sm font-medium transition-colors',
        active
          ? 'bg-bm-blue-100 text-bm-blue-900'
          : 'text-bm-gray-700 hover:bg-bm-gray-100'
      )}
    >
      <div className="text-bm-blue-600">{icon}</div>
      <span>{label}</span>
    </button>
  );
};

const MainLayout: React.FC = () => {
  const { user, profile, signOut, isLoading } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Check if we're on a specific page to highlight the correct sidebar item
  const path = window.location.pathname;
  const isHome = path === '/dashboard';
  const isCargos = path.includes('/cargos');
  const isVehicles = path.includes('/vehicles');
  const isDrivers = path.includes('/drivers');
  const isMap = path.includes('/map');

  const closeMobileMenu = () => setMobileOpen(false);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    navigate('/login');
    return null;
  }

  const isShipper = profile?.user_type === 'shipper';
  const isTransporter = profile?.user_type === 'transporter';
  const subscriptionPackage = profile?.subscription_package || 'GRATIS';

  // Sidebar navigation items based on user type
  const navigationItems = [
    { icon: <Home size={20} />, label: 'Dashboard', path: '/dashboard' },
    ...(isShipper
      ? [{ icon: <Package size={20} />, label: 'Muatan', path: '/cargos' }]
      : []),
    ...(isTransporter
      ? [
          { icon: <Truck size={20} />, label: 'Armada', path: '/vehicles' },
          { icon: <User size={20} />, label: 'Driver', path: '/drivers' },
        ]
      : []),
    { icon: <MapPin size={20} />, label: 'Peta', path: '/map' },
  ];

  return (
    <div className="flex min-h-screen bg-bm-gray-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 border-r border-bm-gray-200 bg-white">
        {/* Logo */}
        <div className="p-4 border-b border-bm-gray-200">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-bm-blue-600 rounded flex items-center justify-center text-white font-bold">
              BM
            </div>
            <span className="font-semibold text-lg">Bursa Muatan</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navigationItems.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
              active={
                (item.path === '/dashboard' && isHome) ||
                (item.path === '/cargos' && isCargos) ||
                (item.path === '/vehicles' && isVehicles) ||
                (item.path === '/drivers' && isDrivers) ||
                (item.path === '/map' && isMap)
              }
            />
          ))}
        </nav>

        {/* User Profile */}
        <div className="border-t border-bm-gray-200 p-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-bm-gray-200 rounded-full flex items-center justify-center">
              {profile?.name ? (
                profile.name.charAt(0).toUpperCase()
              ) : (
                <User size={20} />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">{profile?.name || 'Pengguna'}</p>
              <div className="flex items-center">
                <Badge variant="secondary" className={`text-xs ${subscriptionPackage === 'GRATIS' ? 'bg-bm-gray-100' : 'bg-bm-blue-100 text-bm-blue-800'}`}>
                  {subscriptionPackage}
                </Badge>
                {profile?.average_rating && (
                  <div className="ml-2 flex items-center text-xs text-bm-gray-600">
                    <Star size={12} className="text-yellow-400 mr-0.5" />
                    {profile.average_rating.toFixed(1)}
                  </div>
                )}
              </div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 h-8 w-8">
                  <Settings size={18} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Akun Saya</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => navigate('/profile')}>
                  <User size={16} className="mr-2" /> Profil
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => navigate('/subscription')}>
                  <CreditCard size={16} className="mr-2" /> Langganan
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={signOut}>
                  <LogOut size={16} className="mr-2" /> Keluar
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Nav */}
        <header className="bg-white border-b border-bm-gray-200 p-4 md:py-2 flex items-center justify-between">
          {/* Mobile Menu Button */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="block md:hidden">
              <Button variant="ghost" size="sm" className="p-0 h-10 w-10">
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px] p-0">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="p-4 border-b border-bm-gray-200">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-bm-blue-600 rounded flex items-center justify-center text-white font-bold">
                      BM
                    </div>
                    <span className="font-semibold text-lg">Bursa Muatan</span>
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                  {navigationItems.map((item) => (
                    <SidebarItem
                      key={item.path}
                      icon={item.icon}
                      label={item.label}
                      path={item.path}
                      active={
                        (item.path === '/dashboard' && isHome) ||
                        (item.path === '/cargos' && isCargos) ||
                        (item.path === '/vehicles' && isVehicles) ||
                        (item.path === '/drivers' && isDrivers) ||
                        (item.path === '/map' && isMap)
                      }
                      onClick={closeMobileMenu}
                    />
                  ))}
                </nav>

                {/* Mobile User Profile */}
                <div className="border-t border-bm-gray-200 p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-bm-gray-200 rounded-full flex items-center justify-center">
                      {profile?.name ? (
                        profile.name.charAt(0).toUpperCase()
                      ) : (
                        <User size={20} />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {profile?.name || 'Pengguna'}
                      </p>
                      <div className="flex items-center">
                        <Badge variant="secondary" className={`text-xs ${subscriptionPackage === 'GRATIS' ? 'bg-bm-gray-100' : 'bg-bm-blue-100 text-bm-blue-800'}`}>
                          {subscriptionPackage}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 space-y-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/profile');
                        closeMobileMenu();
                      }}
                    >
                      <User size={16} className="mr-2" /> Profil
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start"
                      onClick={() => {
                        navigate('/subscription');
                        closeMobileMenu();
                      }}
                    >
                      <CreditCard size={16} className="mr-2" /> Langganan
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={signOut}
                    >
                      <LogOut size={16} className="mr-2" /> Keluar
                    </Button>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Mobile/Tablet Logo */}
          <div className="md:hidden flex items-center space-x-2">
            <span className="font-semibold">Bursa Muatan</span>
          </div>

          {/* Search and Notifications */}
          <div className="flex items-center space-x-2">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="p-0 h-10 w-10 relative">
                  <Bell size={20} />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-bm-blue-600 rounded-full"></span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-80">
                <DropdownMenuLabel>Notifikasi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="max-h-[300px] overflow-auto">
                  {/* Placeholder for notifications */}
                  <div className="p-4 text-center text-sm text-bm-gray-500">
                    Tidak ada notifikasi baru
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
