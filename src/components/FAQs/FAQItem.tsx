import React from 'react';
import { IoIosAddCircle, IoMdCloseCircle } from 'react-icons/io';
import { Video } from '../shared/VideoPlayer';
export interface FAQItemType {
  id: number;
  title: string;
  desc: string;
}
interface FAQItemProps {
  title: string;
  desc: string;
  selectedFAQItem: any;
  item: any;
  handleClick: Function;
}
const FAQItem: React.FC<FAQItemProps> = ({
  title,
  desc,
  selectedFAQItem,
  item,
  handleClick
}) => {
  return (
    <div className="w-full cursor-pointer" onClick={() => handleClick()}>
      <div
        className={`w-full rounded-[64px] p-8 gap-1 transform transition duration-200 ease-linear ${
          item?.id === selectedFAQItem?.id
            ? 'bg-[#E0E0E0] translate-y-0 '
            : '-translate-y-2 hover:bg-[#FCEA10]'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl ">{title}</p>
          {item?.id === selectedFAQItem?.id ? (
            <IoMdCloseCircle size={32} />
          ) : (
            <IoIosAddCircle size={32} color="#757575" />
          )}
        </div>
        {item?.id === selectedFAQItem?.id && (
          <div className="flex flex-col items-center sm:items-start">
            <p className="h-[72px] flex items-center font-medium text-xl">
              {desc}
            </p>
            <div className="flex sm:hidden">
              <Video
                height={524}
                width={295}
                url="https://media.videoask.com/transcoded/c2b1ad38-dac7-43d7-878c-ad97b7fd3001/video.mp4?token=eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZWRpYV9pZCI6ImMyYjFhZDM4LWRhYzctNDNkNy04NzhjLWFkOTdiN2ZkMzAwMSIsImV4cCI6MTY3MTU2NTQzOH0.zyGNKzV0dnNVRj9vBJn5ybjAuSDt_mnHWwsmOJ2kOPzesje_dt760ev6c_9xoT0q3VJRxM5G7LhJvUS0b7feqw8XRiZ0kBAtWfkHDFIzWhu3amxukdI2lqVdKrgknmp0LrW22QO_jTclu06VB35Sl9KNotn3aqtGXAeuP1fJ-6gGFR_apV28JS_vnioxUWAN_L7ms-H4B2pJDQl-tsBeFKcNx8FnmwoGRsN9VrsU_99LpyZhowr80GV7x_Dq78c2RJ9T_eYtoVXGN9nt0Ktxh69eWDNKkwIF2OiCGT9xSJETi6stxNoMjnP6uW39qyqcYJCHntlilQgS9K3ks2gHKWD5HKJt_7DByShw6CFyd-1BtzaES4VA8RDwueZAJznbkympEekTm3LQ_xRg4DfL5nv2u9F5_RXEHRLjc16oL3TpOjVlIKpCFuGQGIC1WEflakhG-cpIFOtjC84HTYikg6F7x-HlqPyaNehIOjZvfAStKlzITvaDLGOhULmrhg6uWrFX4sGxIlJcM_sTq0yds7fIh6V7KsXQ-3lPmqec4iU5txBlUdGDpaDNIc7UpuhHCD_sUgfdXixOKyN7xxrDAPLnpuQ3EaQmL6gyzVaV5Mlj4Qz_K-wSJ6J9M5RxHDAjXOy5JUdj4epSKRXEAhMDoXVwVhKTsSQlaeYSn1llmfU"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { FAQItem };
