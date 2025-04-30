
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';
import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const subscriptionPlans = [
  {
    name: 'GRATIS',
    price: '0',
    description: 'Mulailah menggunakan Bursa Muatan tanpa biaya',
    features: [
      'Kuota Publikasi Muatan (Shipper): 3',
      'Kuota Penawaran Harga (Transporter): 3',
      'Kuota Armada (Transporter): 1',
      'Kuota Driver (Transporter): 1',
      'Fitur dasar',
    ],
    popular: false,
    badgeClass: 'bm-badge-free',
  },
  {
    name: 'STANDARD',
    price: '150.000',
    description: 'Ideal untuk pengguna yang baru memulai',
    features: [
      'Kuota Publikasi Muatan (Shipper): 20',
      'Kuota Penawaran Harga (Transporter): 20',
      'Kuota Armada (Transporter): 2',
      'Kuota Driver (Transporter): 2',
      'Badge "Standard" di profil',
      'Fitur dasar',
    ],
    popular: false,
    badgeClass: 'bm-badge-standard',
  },
  {
    name: 'PREMIUM',
    price: '300.000',
    description: 'Cocok untuk pengguna yang aktif',
    features: [
      'Kuota Publikasi Muatan (Shipper): 50',
      'Kuota Penawaran Harga (Transporter): 50',
      'Kuota Armada (Transporter): 5',
      'Kuota Driver (Transporter): 5',
      'Badge "Premium" di profil',
      'Rekomendasi muatan/transportasi',
      'Fitur menengah',
    ],
    popular: true,
    badgeClass: 'bm-badge-premium',
  },
  {
    name: 'BISNIS',
    price: '500.000',
    description: 'Untuk usaha transportasi yang berkembang',
    features: [
      'Kuota Publikasi Muatan (Shipper): 100',
      'Kuota Penawaran Harga (Transporter): 100',
      'Kuota Armada (Transporter): 10',
      'Kuota Driver (Transporter): 10',
      'Badge "Bisnis" di profil',
      'Rekomendasi muatan/transportasi',
      'Fitur lanjutan',
    ],
    popular: false,
    badgeClass: 'bm-badge-enterprise',
  },
  {
    name: 'ENTERPRISE',
    price: '2.500.000',
    description: 'Untuk perusahaan transportasi besar',
    features: [
      'Kuota Publikasi Muatan (Shipper): Unlimited',
      'Kuota Penawaran Harga (Transporter): Unlimited',
      'Kuota Armada (Transporter): Unlimited',
      'Kuota Driver (Transporter): Unlimited',
      'Badge "Enterprise" di profil',
      'Rekomendasi prioritas',
      'Semua fitur tersedia',
    ],
    popular: false,
    badgeClass: 'bm-badge-enterprise',
  },
];

export default function SubscriptionPlans() {
  const { profile, refreshProfile } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get current subscription
  const currentSubscription = profile?.subscription_package || 'GRATIS';

  const handleSubscribe = async (planName: string) => {
    setSelectedPlan(planName);
    setIsLoading(true);
    
    try {
      // In a real app, this would navigate to a payment processor
      // For demo purposes, we'll just simulate API call and update the subscription
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update subscription in Supabase
      const { error } = await supabase
        .from('profiles')
        .update({ 
          subscription_package: planName,
          updated_at: new Date().toISOString()
        })
        .eq('id', profile?.id);
      
      if (error) throw error;
      
      // Refresh the user profile to get updated subscription
      await refreshProfile();
      
      toast.success(`Berhasil berlangganan paket ${planName}!`);
    } catch (error: any) {
      console.error('Error subscribing to plan:', error);
      toast.error('Gagal berlangganan: ' + (error.message || 'Terjadi kesalahan'));
    } finally {
      setIsLoading(false);
      setSelectedPlan(null);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Paket Langganan</h2>
        <p className="text-muted-foreground">
          Pilih paket yang sesuai dengan kebutuhan Anda
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {subscriptionPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`flex flex-col ${
              plan.popular ? 'border-bm-blue-500 shadow-lg' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-bm-blue-500 text-white text-xs font-medium px-3 py-1 rounded-t-lg text-center uppercase">
                Populer
              </div>
            )}
            <CardHeader>
              <div className={`bm-badge ${plan.badgeClass} mb-2 self-start`}>
                {plan.name}
              </div>
              <CardTitle className="text-xl">
                <span className="text-3xl font-bold">Rp {plan.price}</span>
                <span className="text-base text-muted-foreground">/bulan</span>
              </CardTitle>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-2 text-sm">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                variant={currentSubscription === plan.name ? "outline" : "default"}
                disabled={isLoading && selectedPlan === plan.name || currentSubscription === plan.name}
                onClick={() => handleSubscribe(plan.name)}
              >
                {isLoading && selectedPlan === plan.name ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    <span>Memproses...</span>
                  </div>
                ) : currentSubscription === plan.name ? (
                  'Paket Aktif'
                ) : (
                  'Pilih Paket'
                )}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-muted-foreground">
        <p>
          Semua harga dalam Rupiah Indonesia (IDR). Paket langganan aktif selama satu bulan.
        </p>
        <p className="mt-1">
          Perlu bantuan? Hubungi kami di{' '}
          <a
            href="mailto:support@bursamuatan.com"
            className="text-bm-blue-600 hover:underline"
          >
            support@bursamuatan.com
          </a>
        </p>
      </div>
    </div>
  );
}
