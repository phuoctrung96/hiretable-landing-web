import React, { useState } from 'react';
import { FAQItemType, FAQItem } from './FAQItem';
import { FAQList } from './FAQs.content';

const FAQs: React.FC = () => {
  const [selectedFAQItem, setSelectedFAQItem] = useState<FAQItemType>();

  const handleItemClick = (faqItem: any) => {
    if (faqItem === selectedFAQItem) {
      setSelectedFAQItem({});
    } else {
      setSelectedFAQItem(faqItem);
    }
  };

  return (
    <div className="flex items-center flex-col max-w-[1200px] m-auto sm:py-16 ">
      <h4 className="text-center py-14">Frequently asked questions</h4>
      <div className="flex flex-col gap-2 w-full">
        {FAQList.map((item, index) => (
          <FAQItem
            key={item.id}
            title={item.title}
            desc={item.desc}
            item={item}
            isVideo={false}
            selectedFAQItem={selectedFAQItem}
            handleClick={() => handleItemClick(item)}
          />
        ))}
      </div>
    </div>
  );
};

export { FAQs };
