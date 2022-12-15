import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { FAQList } from '@/constants/FAQs.content';
import { FQAItemType } from '@/constants/types';
const FAQs: React.FC = () => {
  const [selectedFAQItem, setSelectedFAQItem] = useState<FQAItemType>();

  const handleItemClick = (faqItem: any) => {
    setSelectedFAQItem(faqItem);
  };

  return (
    <div className="flex items-center flex-col sm:px-[74px] sm:py-16 px-2">
      <h4 className="text-center mb-5">Frequently asked questions</h4>
      {FAQList.map((item, index) => (
        <FAQItem
          key={item.id}
          title={item.title}
          desc={item.desc}
          item={item}
          selectedFAQItem={selectedFAQItem}
          handleClick={() => handleItemClick(item)}
        />
      ))}
    </div>
  );
};

export default FAQs;
