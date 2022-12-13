import { NextPage } from 'next';
import PricingPlanCard from '@/components/PricingPlanCard';
import Header from '@/components/Header';
import ComparationTable from '@/components/ComparationTable';
import { PricingPlans } from '@/constants/PricingPlans.content';

const pricing: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center items-center mx-32">
        <div className="flex gap-5 mb-10">
          {PricingPlans.map((item, index) => (
            <PricingPlanCard key={index} data={item} />
          ))}
        </div>
        <ComparationTable data={PricingPlans} />
      </div>
    </div>
  );
};

export default pricing;
