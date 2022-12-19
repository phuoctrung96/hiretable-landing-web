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
      <h4 className="text-center mb-5">Frequently asked questions</h4>
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
  );
};

export { FAQs };
