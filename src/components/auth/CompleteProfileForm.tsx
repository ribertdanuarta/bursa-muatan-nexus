
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const CompleteProfileForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [userType, setUserType] = useState('');
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        navigate('/login');
        return;
      }
      setUserId(user.id);

      // Check if profile already exists
      const { data } = await supabase
        .from('profiles')
        .select('name, phone, company_name, company_address, user_type')
        .eq('id', user.id)
        .single();

      if (data) {
        // Pre-fill form with existing data
        setName(data.name || '');
        setPhone(data.phone || '');
        setCompanyName(data.company_name || '');
        setCompanyAddress(data.company_address || '');
        setUserType(data.user_type || '');
      }
    };

    checkUser();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!userId) {
      toast.error('User ID tidak ditemukan. Silakan login kembali.');
      return;
    }
    
    if (!userType) {
      toast.error('Silakan pilih jenis pengguna');
      return;
    }
    
    setLoading(true);

    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: userId,
          name,
          phone,
          company_name: companyName,
          company_address: companyAddress,
          user_type: userType,
          updated_at: new Date().toISOString(),
        });

      if (error) {
        throw error;
      }

      toast.success('Profil berhasil diperbarui!');
      navigate('/dashboard');
    } catch (error: any) {
      toast.error(error.message || 'Terjadi kesalahan saat memperbarui profil');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Lengkapi Profil</CardTitle>
        <CardDescription className="text-center">
          Lengkapi profil Anda untuk menggunakan semua fitur Bursa Muatan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="userType" className="block mb-2">Jenis Pengguna <span className="text-red-500">*</span></Label>
              <RadioGroup
                value={userType}
                onValueChange={setUserType}
                className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-6"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="shipper" id="shipper" />
                  <Label htmlFor="shipper" className="font-normal">
                    Shipper (Pemilik Muatan)
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="transporter" id="transporter" />
                  <Label htmlFor="transporter" className="font-normal">
                    Transporter (Penyedia Jasa Angkutan)
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name">Nama Lengkap <span className="text-red-500">*</span></Label>
              <Input
                id="name"
                placeholder="Nama lengkap Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Nomor Telepon <span className="text-red-500">*</span></Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Contoh: 08123456789"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyName">Nama Perusahaan</Label>
              <Input
                id="companyName"
                placeholder="Nama perusahaan Anda"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="companyAddress">Alamat Perusahaan</Label>
              <Textarea
                id="companyAddress"
                placeholder="Alamat perusahaan Anda"
                value={companyAddress}
                onChange={(e) => setCompanyAddress(e.target.value)}
                className="min-h-[80px]"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Menyimpan...
              </>
            ) : (
              'Simpan Profil'
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default CompleteProfileForm;
