
import SubscriptionPlans from '@/components/subscription/SubscriptionPlans';

const SubscriptionPage = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Paket Langganan</h1>
        <p className="text-muted-foreground">Tingkatkan pengalaman dengan paket langganan Bursa Muatan</p>
      </div>
      
      <SubscriptionPlans />
    </div>
  );
};

export default SubscriptionPage;
