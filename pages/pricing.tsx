import React from 'react';
import Card from '@/components/Card';
import Header from '@/components/Header';
import ComparationTable from '@/components/ComparationTable';
import { PricingList } from '@/constants/Pricing.content';

const pricing = () => {
  return (
    <div>
      <Header />
      <div className='flex flex-col justify-center items-center mx-32'>
        <div className="flex gap-5 mb-10">
          {PricingList.map((item, index) => (
            <Card key={index} data={item} />
          ))}
        </div>
        <ComparationTable data={PricingList} />
      </div>
    </div>
  );
};

export default pricing;
