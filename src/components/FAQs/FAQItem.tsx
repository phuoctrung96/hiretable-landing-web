import React from 'react';
import { IoIosAddCircle, IoMdCloseCircle } from 'react-icons/io';
import { Video } from '../shared/VideoPlayer';
export interface FAQItemType {
  id?: number;
  title?: string;
  desc?: string;
}
interface FAQItemProps {
  title: string;
  desc: string;
  selectedFAQItem: any;
  item: any;
  handleClick: Function;
  isVideo: boolean;
}
const FAQItem: React.FC<FAQItemProps> = ({
  title,
  desc,
  selectedFAQItem,
  item,
  handleClick,
  isVideo
}) => {
  return (
    <div className="w-full cursor-pointer" onClick={() => handleClick()}>
      <div
        className={`w-full rounded-[64px] p-8 gap-1 transform transition duration-400 ease-out ${
          item?.id === selectedFAQItem?.id
            ? 'bg-[#E0E0E0] translate-y-0'
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
            <div className={`${isVideo && 'flex'} sm:hidden my-3`}>
              <Video height={524} width={295} url={selectedFAQItem?.videoUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { FAQItem };
