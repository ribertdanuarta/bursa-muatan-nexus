
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

const AuthLayout = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
      </div>
    );
  }

  // If user is authenticated, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-bm-blue-50 to-white">
      <header className="container mx-auto p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-bm-blue-600 rounded flex items-center justify-center text-white font-bold">
            BM
          </div>
          <span className="font-semibold text-lg">Bursa Muatan</span>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Outlet />
      </main>
      <footer className="container mx-auto p-4 text-center text-bm-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Bursa Muatan - Semua hak dilindungi
      </footer>
    </div>
  );
};

export default AuthLayout;
