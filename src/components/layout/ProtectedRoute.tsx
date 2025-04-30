
import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

type ProtectedRouteProps = {
  children: ReactNode;
  userType?: 'shipper' | 'transporter' | undefined;
};

const ProtectedRoute = ({ children, userType }: ProtectedRouteProps) => {
  const { user, profile, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bm-blue-600"></div>
      </div>
    );
  }

  // If not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // If profile is not complete, redirect to complete profile page
  if (!profile?.name || !profile?.user_type) {
    return <Navigate to="/complete-profile" replace />;
  }

  // If userType is specified, check if user has the right type
  if (userType && profile.user_type !== userType) {
    return <Navigate to="/dashboard" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
