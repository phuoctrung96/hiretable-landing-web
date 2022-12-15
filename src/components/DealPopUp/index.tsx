import Image from 'next/image';
import React from 'react';
import DealForm from '../DealForm';
import { AiOutlineCheck } from 'react-icons/ai';

interface DealPopUpProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const DealPopUp: React.FC<DealPopUpProps> = ({ isOpen, setIsOpen }) => {
  return (
    <>
      {isOpen ? (
        <div className="flex justify-center items-center  fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative h-full w-full">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col h-full  w-full bg-white outline-none focus:outline-none">
              <div className="flex items-end justify-end rounded-t ">
                <button
                  className="bg-transparent border-0 text-black float-right"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-black opacity-7 h-6 w-6 text-xl block  py-0 rounded-full">
                    x
                  </span>
                </button>
              </div>
              <div className="relative flex-auto">
                <div className="flex sm:flex-row h-full flex-col items-start justify-evenly px-4 sm:px-20 py-3">
                  <div className="flex flex-col justify-start sm:w-[618px] mb-8">
                    <p className=" font-bold sm:text-[106px] text-[40px] flex-grow-0 text-center sm:text-left">
                      Make a <span className="text-[#FCEA10]">deal</span>
                    </p>
                    <p className="font-medium text-xl my-8">
                      Available for businesses and franchises with large
                      application volume, custom branding or unique business
                      models
                    </p>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className="p-1 mr-3">
                          <AiOutlineCheck size={16} />
                        </span>
                        <p>Volume discounts</p>
                      </div>
                      <Image
                        src="/questionCircle.svg"
                        alt="questionCircle"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className="p-1 mr-3">
                          <AiOutlineCheck size={16} />
                        </span>
                        <p>Custom branding</p>
                      </div>
                      <Image
                        src="/questionCircle.svg"
                        alt="questionCircle"
                        width={16}
                        height={16}
                      />
                    </div>
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex items-center">
                        <span className="p-1 mr-3">
                          <AiOutlineCheck size={16} />
                        </span>
                        <p>Multiple locations</p>
                      </div>
                      <Image
                        src="/questionCircle.svg"
                        alt="questionCircle"
                        width={16}
                        height={16}
                      />
                    </div>
                  </div>
                  <DealForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default DealPopUp;
