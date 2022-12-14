import React, { useState } from 'react';
import { IoIosAddCircle, IoMdCloseCircle } from 'react-icons/io';
import Video from '../VideoPlayer';
interface FAQItemProps {
  title: string;
  desc: string;
}
const FAQItem: React.FC<FAQItemProps> = ({ title, desc }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full" onClick={() => setIsOpen(!isOpen)}>
      <div
        className={`w-full rounded-[128px] p-8 gap-1 transform  hover:bg-gray-400 ease-in-out duration-300 ${
          isOpen ? 'bg-[#E0E0E0] translate-y-0' : '-translate-y-2'
        }`}
      >
        <div className="flex items-center justify-between">
          <p className="font-bold text-xl ">{title}</p>
          {isOpen ? (
            <IoMdCloseCircle size={32} />
          ) : (
            <IoIosAddCircle size={32} color="#757575" />
          )}
        </div>
        {isOpen && (
          <div className="flex flex-col items-center sm:items-start">
            <p className="h-[72px] flex items-center font-medium text-xl">
              {desc}
            </p>
            <div className="flex sm:hidden">
              <Video height={524} width={295} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FAQItem;
