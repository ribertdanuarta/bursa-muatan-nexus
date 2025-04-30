
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Periksa Email Anda</CardTitle>
        <CardDescription className="text-center">
          Kami telah mengirimkan email verifikasi. Klik tautan di email untuk mengaktifkan akun Anda.
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
          Jika Anda tidak menerima email dalam beberapa menit, periksa folder spam atau coba masuk kembali.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="link" asChild>
          <Link to="/login">Kembali ke Halaman Login</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CheckEmail;
