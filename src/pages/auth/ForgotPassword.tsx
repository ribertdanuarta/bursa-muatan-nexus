
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Silakan masukkan alamat email');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      
      if (error) {
        throw error;
      }
      
      setIsSubmitted(true);
      toast.success('Instruksi reset password telah dikirim ke email Anda');
    } catch (error: any) {
      console.error('Error resetting password:', error);
      toast.error(error.message || 'Terjadi kesalahan saat mengirim instruksi reset password');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Periksa Email Anda</CardTitle>
          <CardDescription className="text-center">
            Kami telah mengirimkan instruksi untuk mengatur ulang password Anda.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-6">
          <div className="mb-6 mx-auto w-16 h-16 rounded-full bg-bm-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-8 h-8 text-bm-blue-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <p className="text-muted-foreground max-w-xs mx-auto">
            Ikuti petunjuk di email untuk mengatur ulang password Anda. Jika Anda tidak menerima email, periksa folder spam.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button variant="link" asChild>
            <Link to="/login">Kembali ke Halaman Login</Link>
          </Button>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Lupa Password</CardTitle>
        <CardDescription className="text-center">
          Masukkan alamat email Anda untuk menerima instruksi reset password
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nama@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Mengirim...
              </>
            ) : (
              'Kirim Instruksi Reset Password'
            )}
          </Button>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" asChild>
          <Link to="/login">Kembali ke Halaman Login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ForgotPassword;
