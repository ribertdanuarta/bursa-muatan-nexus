
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '@supabase/supabase-js';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';
import { useAuth } from '@/contexts/AuthContext';

// Initialize Supabase client
const supabaseUrl = 'https://yqcoagvyvohupfkfxuug.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlxY29hZ3Z5dm9odXBma2Z4dXVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQzNjEyNjQsImV4cCI6MjAyOTkzNzI2NH0.ya9rurJD1DeM1-e6hfasLwzdQqXrKp-5RxjLgCIKtzY';
const supabase = createClient(supabaseUrl, supabaseAnonKey);

type FormValues = {
  title: string;
  cargo_type: string;
  vehicle_type: string;
  weight_kg: number;
  volume_m3: number;
  quantity: number;
  price_budget: number;
  pickup_address: string;
  pickup_city: string;
  pickup_province: string;
  pickup_deadline: string;
  destination_address: string;
  destination_city: string;
  destination_province: string;
  delivery_deadline: string;
  description: string;
  special_instructions: string;
  map_visibility: boolean;
};

export default function CreateCargoForm() {
  const { user, profile } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [saveAsDraft, setSaveAsDraft] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      map_visibility: true,
    },
  });

  const cargoTypes = [
    { value: 'general', label: 'Umum' },
    { value: 'food_beverage', label: 'Makanan & Minuman' },
    { value: 'electronics', label: 'Elektronik' },
    { value: 'furniture', label: 'Furnitur' },
    { value: 'construction', label: 'Bahan Bangunan' },
    { value: 'retail', label: 'Retail' },
    { value: 'hazardous', label: 'Bahan Berbahaya' },
    { value: 'other', label: 'Lainnya' },
  ];

  const vehicleTypes = [
    { value: 'pickup', label: 'Pickup' },
    { value: 'van', label: 'Van' },
    { value: 'box', label: 'Box' },
    { value: 'truck_small', label: 'Truck Kecil' },
    { value: 'truck_medium', label: 'Truck Sedang' },
    { value: 'truck_large', label: 'Truck Besar' },
    { value: 'container', label: 'Container' },
    { value: 'refrigerated_truck', label: 'Truck Berpendingin' },
    { value: 'dump_truck', label: 'Dump Truck' },
    { value: 'other', label: 'Lainnya' },
  ];

  const onSubmit = async (data: FormValues) => {
    setIsLoading(true);
    try {
      // Check subscription quota through Supabase (would be done server-side in a real app)
      
      // In a real app, we'd insert the data into Supabase
      // For demo, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success(
        saveAsDraft
          ? 'Muatan berhasil disimpan sebagai draft'
          : 'Muatan berhasil dipublikasi!'
      );
      navigate('/cargos');
    } catch (error: any) {
      console.error('Error creating cargo:', error);
      toast.error(error.message || 'Terjadi kesalahan saat membuat muatan');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>Buat Muatan Baru</CardTitle>
          <CardDescription>
            Lengkapi informasi berikut untuk mempublikasikan muatan Anda
          </CardDescription>
        </CardHeader>

        <form onSubmit={handleSubmit(onSubmit)}>
          <CardContent className="space-y-6">
            {/* Basic Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Informasi Dasar</h3>
              
              <div className="space-y-2">
                <Label htmlFor="title">Judul Muatan <span className="text-red-500">*</span></Label>
                <Input
                  id="title"
                  placeholder="Contoh: Pengiriman Furniture dari Jakarta ke Bandung"
                  {...register('title', { required: 'Judul muatan wajib diisi' })}
                />
                {errors.title && (
                  <p className="text-sm text-red-500">{errors.title.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cargo_type">Jenis Muatan <span className="text-red-500">*</span></Label>
                  <Select 
                    onValueChange={(value) => setValue('cargo_type', value)}
                    defaultValue=""
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis muatan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {cargoTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.cargo_type && (
                    <p className="text-sm text-red-500">{errors.cargo_type.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="vehicle_type">Jenis Kendaraan <span className="text-red-500">*</span></Label>
                  <Select 
                    onValueChange={(value) => setValue('vehicle_type', value)}
                    defaultValue=""
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis kendaraan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {vehicleTypes.map((type) => (
                          <SelectItem key={type.value} value={type.value}>
                            {type.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {errors.vehicle_type && (
                    <p className="text-sm text-red-500">{errors.vehicle_type.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="weight_kg">Berat (kg)</Label>
                  <Input
                    id="weight_kg"
                    type="number"
                    placeholder="0"
                    {...register('weight_kg', { valueAsNumber: true })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="volume_m3">Volume (m³)</Label>
                  <Input
                    id="volume_m3"
                    type="number"
                    step="0.01"
                    placeholder="0"
                    {...register('volume_m3', { valueAsNumber: true })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="quantity">Jumlah Item</Label>
                  <Input
                    id="quantity"
                    type="number"
                    placeholder="0"
                    {...register('quantity', { valueAsNumber: true })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="price_budget">Budget (Rp) <span className="text-red-500">*</span></Label>
                <Input
                  id="price_budget"
                  type="number"
                  placeholder="0"
                  {...register('price_budget', {
                    required: 'Budget wajib diisi',
                    valueAsNumber: true,
                  })}
                />
                {errors.price_budget && (
                  <p className="text-sm text-red-500">{errors.price_budget.message}</p>
                )}
              </div>
            </div>

            {/* Pickup Location */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold text-lg">Lokasi Jemput</h3>

              <div className="space-y-2">
                <Label htmlFor="pickup_address">Alamat Jemput <span className="text-red-500">*</span></Label>
                <Textarea
                  id="pickup_address"
                  placeholder="Masukkan alamat lengkap lokasi jemput"
                  {...register('pickup_address', { required: 'Alamat jemput wajib diisi' })}
                />
                {errors.pickup_address && (
                  <p className="text-sm text-red-500">{errors.pickup_address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="pickup_city">Kota/Kabupaten <span className="text-red-500">*</span></Label>
                  <Input
                    id="pickup_city"
                    placeholder="Contoh: Jakarta Pusat"
                    {...register('pickup_city', { required: 'Kota/kabupaten wajib diisi' })}
                  />
                  {errors.pickup_city && (
                    <p className="text-sm text-red-500">{errors.pickup_city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup_province">Provinsi <span className="text-red-500">*</span></Label>
                  <Input
                    id="pickup_province"
                    placeholder="Contoh: DKI Jakarta"
                    {...register('pickup_province', { required: 'Provinsi wajib diisi' })}
                  />
                  {errors.pickup_province && (
                    <p className="text-sm text-red-500">{errors.pickup_province.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="pickup_deadline">Deadline Jemput <span className="text-red-500">*</span></Label>
                <Input
                  id="pickup_deadline"
                  type="datetime-local"
                  {...register('pickup_deadline', { required: 'Deadline jemput wajib diisi' })}
                />
                {errors.pickup_deadline && (
                  <p className="text-sm text-red-500">{errors.pickup_deadline.message}</p>
                )}
              </div>
            </div>

            {/* Destination Location */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold text-lg">Lokasi Tujuan</h3>

              <div className="space-y-2">
                <Label htmlFor="destination_address">Alamat Tujuan <span className="text-red-500">*</span></Label>
                <Textarea
                  id="destination_address"
                  placeholder="Masukkan alamat lengkap lokasi tujuan"
                  {...register('destination_address', { required: 'Alamat tujuan wajib diisi' })}
                />
                {errors.destination_address && (
                  <p className="text-sm text-red-500">{errors.destination_address.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="destination_city">Kota/Kabupaten <span className="text-red-500">*</span></Label>
                  <Input
                    id="destination_city"
                    placeholder="Contoh: Bandung"
                    {...register('destination_city', { required: 'Kota/kabupaten wajib diisi' })}
                  />
                  {errors.destination_city && (
                    <p className="text-sm text-red-500">{errors.destination_city.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="destination_province">Provinsi <span className="text-red-500">*</span></Label>
                  <Input
                    id="destination_province"
                    placeholder="Contoh: Jawa Barat"
                    {...register('destination_province', { required: 'Provinsi wajib diisi' })}
                  />
                  {errors.destination_province && (
                    <p className="text-sm text-red-500">{errors.destination_province.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="delivery_deadline">Deadline Kirim <span className="text-red-500">*</span></Label>
                <Input
                  id="delivery_deadline"
                  type="datetime-local"
                  {...register('delivery_deadline', { required: 'Deadline kirim wajib diisi' })}
                />
                {errors.delivery_deadline && (
                  <p className="text-sm text-red-500">{errors.delivery_deadline.message}</p>
                )}
              </div>
            </div>

            {/* Additional Info */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-semibold text-lg">Informasi Tambahan</h3>

              <div className="space-y-2">
                <Label htmlFor="description">Deskripsi Muatan</Label>
                <Textarea
                  id="description"
                  placeholder="Tambahkan detail muatan lainnya"
                  {...register('description')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="special_instructions">Instruksi Khusus</Label>
                <Textarea
                  id="special_instructions"
                  placeholder="Masukkan instruksi khusus untuk pengiriman (jika ada)"
                  {...register('special_instructions')}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="map_visibility"
                  checked={true}
                  {...register('map_visibility')}
                />
                <Label htmlFor="map_visibility" className="font-normal">
                  Tampilkan di peta (visibilitas publik)
                </Label>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate('/cargos')}
            >
              Batal
            </Button>
            <div className="space-x-2">
              <Button
                type="submit"
                variant="outline"
                onClick={() => setSaveAsDraft(true)}
                disabled={isLoading}
              >
                Simpan Draft
              </Button>
              <Button
                type="submit"
                disabled={isLoading}
                onClick={() => setSaveAsDraft(false)}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    <span>Memproses...</span>
                  </div>
                ) : (
                  'Publikasikan'
                )}
              </Button>
            </div>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
