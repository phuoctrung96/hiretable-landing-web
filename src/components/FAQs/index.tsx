import { useState } from 'react';
import FAQItem from './FAQItem';
import { FAQList } from '@/constants/FAQs.content';
const FAQs = () => {
  return (
    <div className="flex items-center flex-col sm:px-[74px] sm:py-16 px-2 gap-14">
      <h4 className="text-center ">Frequently asked questions</h4>
      {FAQList.map((item, index) => (
        <FAQItem key={item.id} title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default FAQs;
