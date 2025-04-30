
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import MapComponent from '@/components/map/MapComponent';

const MapPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Peta Bursa Muatan</h1>
        <p className="text-muted-foreground">Lihat sebaran muatan dan armada secara visual</p>
      </div>
      
      <Card className="overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle>Peta Interaktif</CardTitle>
          <CardDescription>Muatan dan armada yang tersedia</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <MapComponent />
        </CardContent>
      </Card>
    </div>
  );
};

export default MapPage;
