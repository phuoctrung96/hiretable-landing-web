import React, { useState } from 'react';
import FAQItem from '../FAQs/FAQItem';
import Video from '../VideoPlayer';
import { HireEasilyData } from '@/constants/HireEasily.content';
import { HireEasilyItem } from '@/constants/types';

const HireEasily: React.FC = () => {
  const [selectedFAQItem, setSelectedFAQItem] = useState<HireEasilyItem>();
  const defaultVideoUrl =
    'https://media.videoask.com/transcoded/c2b1ad38-dac7-43d7-878c-ad97b7fd3001/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImMyYjFhZDM4LWRhYzctNDNkNy04NzhjLWFkOTdiN2ZkMzAwMSIsImV4cCI6MTY3MTU2NTQzOH0.zyGNKzV0dnNVRj9vBJn5ybjAuSDt_mnHWwsmOJ2kOPzesje_dt760ev6c_9xoT0q3VJRxM5G7LhJvUS0b7feqw8XRiZ0kBAtWfkHDFIzWhu3amxukdI2lqVdKrgknmp0LrW22QO_jTclu06VB35Sl9KNotn3aqtGXAeuP1fJ-6gGFR_apV28JS_vnioxUWAN_L7ms-H4B2pJDQl-tsBeFKcNx8FnmwoGRsN9VrsU_99LpyZhowr80GV7x_Dq78c2RJ9T_eYtoVXGN9nt0Ktxh69eWDNKkwIF2OiCGT9xSJETi6stxNoMjnP6uW39qyqcYJCHntlilQgS9K3ks2gHKWD5HKJt_7DByShw6CFyd-1BtzaES4VA8RDwueZAJznbkympEekTm3LQ_xRg4DfL5nv2u9F5_RXEHRLjc16oL3TpOjVlIKpCFuGQGIC1WEflakhG-cpIFOtjC84HTYikg6F7x-HlqPyaNehIOjZvfAStKlzITvaDLGOhULmrhg6uWrFX4sGxIlJcM_sTq0yds7fIh6V7KsXQ-3lPmqec4iU5txBlUdGDpaDNIc7UpuhHCD_sUgfdXixOKyN7xxrDAPLnpuQ3EaQmL6gyzVaV5Mlj4Qz_K-wSJ6J9M5RxHDAjXOy5JUdj4epSKRXEAhMDoXVwVhKTsSQlaeYSn1llmfU';

  const handleItemClick = (faqItem: any) => {
    setSelectedFAQItem(faqItem);
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="sm:px-[74px] sm:py-16 text-center">
        Hire easily with HireTable.
      </h4>
      <div className="flex-align-justify-center ">
        <div className="flex flex-col sm:mr-16 sm:w-[614px] gap-2">
          {HireEasilyData.map((item, index) => (
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
        <div className="hidden lg:hidden xl:flex sm:hidden md:hidden">
          <Video
            height={1002}
            width={608}
            url={selectedFAQItem ? selectedFAQItem.videoUrl : defaultVideoUrl}
          />
        </div>
      </div>
    </div>
  );
};

export default HireEasily;
