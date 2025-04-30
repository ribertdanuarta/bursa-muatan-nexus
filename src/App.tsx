
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/layout/ProtectedRoute";
import AuthLayout from "./components/layout/AuthLayout";
import MainLayout from "./components/layout/MainLayout";

import Index from "./pages/Index";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import CheckEmail from "./pages/auth/CheckEmail";
import ForgotPassword from "./pages/auth/ForgotPassword";
import CompleteProfile from "./pages/auth/CompleteProfile";
import Dashboard from "./pages/dashboard/Dashboard";
import Cargos from "./pages/cargos/Cargos";
import CreateCargo from "./pages/cargos/CreateCargo";
import MapPage from "./pages/map/MapPage";
import SubscriptionPage from "./pages/subscription/SubscriptionPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            
            {/* Auth routes */}
            <Route element={<AuthLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/check-email" element={<CheckEmail />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
            </Route>
            
            {/* Profile completion */}
            <Route 
              path="/complete-profile" 
              element={
                <ProtectedRoute>
                  <CompleteProfile />
                </ProtectedRoute>
              } 
            />
            
            {/* Main app routes */}
            <Route element={<MainLayout />}>
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
              
              {/* Shipper routes */}
              <Route 
                path="/cargos" 
                element={
                  <ProtectedRoute userType="shipper">
                    <Cargos />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/cargos/create" 
                element={
                  <ProtectedRoute userType="shipper">
                    <CreateCargo />
                  </ProtectedRoute>
                } 
              />
              
              {/* Common routes */}
              <Route 
                path="/map" 
                element={
                  <ProtectedRoute>
                    <MapPage />
                  </ProtectedRoute>
                } 
              />
              <Route 
                path="/subscription" 
                element={
                  <ProtectedRoute>
                    <SubscriptionPage />
                  </ProtectedRoute>
                } 
              />
            </Route>
            
            {/* Not found */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
