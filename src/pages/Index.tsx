
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const Index = () => {
  const navigate = useNavigate();

  // Redirect to login page for an ongoing session
  useEffect(() => {
    navigate('/login');
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bursa Muatan</h1>
        <p className="text-xl text-gray-600">Menghubungkan Shipper dan Transporter</p>
        <div className="mt-8 space-x-4">
          <Button onClick={() => navigate('/login')}>Masuk</Button>
          <Button variant="outline" onClick={() => navigate('/register')}>Daftar</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
