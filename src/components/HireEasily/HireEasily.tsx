import React, { useState } from 'react';
import { Video } from '../shared/VideoPlayer';
import { HireEasilyData } from './HireEasily.content';
import { FAQItem } from '../FAQs/FAQItem';

interface HireEasilyItemType {
  id?: number;
  title?: string;
  subTitle?: string;
  desc?: string;
  videoUrl?: string;
}

const HireEasily: React.FC = () => {
  const [selectedFAQItem, setSelectedFAQItem] = useState<HireEasilyItemType>();
  const defaultVideoUrl =
    'https://media.videoask.com/transcoded/c2b1ad38-dac7-43d7-878c-ad97b7fd3001/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImMyYjFhZDM4LWRhYzctNDNkNy04NzhjLWFkOTdiN2ZkMzAwMSIsImV4cCI6MTY3MTU2NTQzOH0.zyGNKzV0dnNVRj9vBJn5ybjAuSDt_mnHWwsmOJ2kOPzesje_dt760ev6c_9xoT0q3VJRxM5G7LhJvUS0b7feqw8XRiZ0kBAtWfkHDFIzWhu3amxukdI2lqVdKrgknmp0LrW22QO_jTclu06VB35Sl9KNotn3aqtGXAeuP1fJ-6gGFR_apV28JS_vnioxUWAN_L7ms-H4B2pJDQl-tsBeFKcNx8FnmwoGRsN9VrsU_99LpyZhowr80GV7x_Dq78c2RJ9T_eYtoVXGN9nt0Ktxh69eWDNKkwIF2OiCGT9xSJETi6stxNoMjnP6uW39qyqcYJCHntlilQgS9K3ks2gHKWD5HKJt_7DByShw6CFyd-1BtzaES4VA8RDwueZAJznbkympEekTm3LQ_xRg4DfL5nv2u9F5_RXEHRLjc16oL3TpOjVlIKpCFuGQGIC1WEflakhG-cpIFOtjC84HTYikg6F7x-HlqPyaNehIOjZvfAStKlzITvaDLGOhULmrhg6uWrFX4sGxIlJcM_sTq0yds7fIh6V7KsXQ-3lPmqec4iU5txBlUdGDpaDNIc7UpuhHCD_sUgfdXixOKyN7xxrDAPLnpuQ3EaQmL6gyzVaV5Mlj4Qz_K-wSJ6J9M5RxHDAjXOy5JUdj4epSKRXEAhMDoXVwVhKTsSQlaeYSn1llmfU';

  const handleItemClick = (faqItem: any) => {
    if (faqItem === selectedFAQItem) {
      setSelectedFAQItem({});
    } else {
      setSelectedFAQItem(faqItem);
    }
  };

  return (
    <div className="flex flex-col items-center max-w-[1200px] m-auto">
      <h4 className="sm:px-[74px] sm:py-16 text-center">
        Hire easily with HireTable.
      </h4>
      <div className="flex items-center justify-center">
        <div className="flex flex-1 flex-col sm:max-w-[600px] gap-2">
          {HireEasilyData.map((item, index) => (
            <FAQItem
              isVideo={true}
              key={item.id}
              title={item.title}
              desc={item.desc}
              item={item}
              selectedFAQItem={selectedFAQItem}
              handleClick={() => handleItemClick(item)}
            />
          ))}
        </div>
        <div className="relative flex-1 hidden lg:hidden xl:flex sm:hidden md:hidden ml-[70px] w-full">
          <div className="absolute z-30 top-0 left-1 flex flex-col p-8 gap-3">
            <span className="font-bold text-[#fafafa] text-[32px] leading-[150%]">
              {selectedFAQItem?.title}
            </span>
            <span className="font-bold text-[#fafafa] text-xl leading-[150%]">
              {selectedFAQItem?.subTitle}
            </span>
          </div>
          <Video url={selectedFAQItem?.videoUrl || defaultVideoUrl} />
        </div>
      </div>
    </div>
  );
};

export { HireEasily };
