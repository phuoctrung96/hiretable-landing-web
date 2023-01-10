import React from 'react';
import { IoIosAddCircle, IoMdCloseCircle } from 'react-icons/io';
import { Video } from '../shared/VideoPlayer';
export interface FAQItemType {
  id?: number;
  title?: string;
  desc?: string;
}
interface FAQItemProps {
  elemId?: string;
  title: string;
  desc: string;
  selectedFAQItem: any;
  item: any;
  handleClick: Function;
  isVideo: boolean;
}
const FAQItem: React.FC<FAQItemProps> = ({
  elemId,
  title,
  desc,
  selectedFAQItem,
  item,
  handleClick,
  isVideo
}) => {
  return (
    <div
      id={elemId}
      className="w-full cursor-pointer"
      onClick={() => handleClick()}
    >
      <div
        className={`w-full rounded-[64px] px-6 sm:px-8 py-8 gap-1 transform transition duration-400 ease-out ${
          item?.id === selectedFAQItem?.id
            ? 'bg-[#E0E0E0] translate-y-0 py-6'
            : 'hover:bg-[#FCEA10] py-7'
        }`}
      >
        <div className="flex items-center justify-between">
          <p
            className={`font-bold text-xl ${
              item?.id === selectedFAQItem?.id ? 'mb-4' : ''
            }`}
          >
            {title}
          </p>
          <span className="w-10">
            {item?.id === selectedFAQItem?.id ? (
              <IoMdCloseCircle size={40} />
            ) : (
              <IoIosAddCircle size={40} color="#757575" />
            )}
          </span>
        </div>
        {item?.id === selectedFAQItem?.id && (
          <div className="flex flex-col items-center sm:items-start">
            <p className="flex items-center font-medium text-xl">{desc}</p>
            <div className={`${isVideo ? 'flex' : 'hidden'} sm:hidden my-3`}>
              <Video url={selectedFAQItem?.videoUrl} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { FAQItem };
