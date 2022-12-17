import Image from 'next/image';
import React, { useState } from 'react';

interface FooterProps {
  isCircle: boolean;
}

const Footer: React.FC<FooterProps> = ({ isCircle }) => {
  const [isHoverIcon, setIsHoverIcon] = useState(false);
  return (
    <div
      className={`flex flex-col justify-center ${
        isCircle && 'rounded-tl-full rounded-tr-full'
      } bg-[#111111] sm:px-[200px]`}
    >
      {isCircle && (
        <div className="flex flex-col items-center h-[722px] justify-center">
          <p className="text-[#FAFAFA] font-bold text-[40px] sm:text-[56px] pt-36 mb-8 text-center">
            Start winning your candidates
          </p>
          <div className="flex h-[164px] w-[164px] items-center">
            <Image
              src="/text-arrow-get-started.svg"
              className={`absolute ${isHoverIcon && 'animate-spin'}`}
              alt="logo-footer"
              width={164}
              height={164}
            />
            <Image
              src="/arrow-get-started.svg"
              className="absolute"
              alt="logo-footer"
              onMouseEnter={() => setIsHoverIcon(!isHoverIcon)}
              onMouseLeave={() => setIsHoverIcon(!isHoverIcon)}
              width={164}
              height={164}
            />
          </div>
        </div>
      )}
      <div className="flex flex-col ml-5 pt-5">
        <Image src="/Long.png" alt="logo" width={98} height={34} />
        <div className=" grid  grid-cols-2 sm:grid-cols-4 items-center justify-between mt-16  mb-16">
          <div className="flex flex-col gap-5">
            <p className="text-[#757575] font-bold text-sm ">CANDIDATES</p>
            <span className="text-[#FAFAFA] font-medium text-sm ">
              How HireTable Works
            </span>
            <span className="text-[#FAFAFA] font-medium text-sm ">
              Refer a Friend
            </span>
            <span className="text-[#FAFAFA] font-medium text-sm ">
              Candidate Sign Up
            </span>
            <span className="text-[#FAFAFA] font-medium text-sm ">
              Success Stories
            </span>
          </div>
          <div className="flex sm:items-center sm:justify-center">
            <div className="flex flex-col gap-5">
              <p className="text-[#757575] font-bold text-sm ">EMPLOYERS</p>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                Why HireTable
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                Pricing
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                Employer Sign Up
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                Success Stories
              </span>
            </div>
          </div>
          <div className="flex sm:items-center sm:justify-center">
            <div className="flex flex-col gap-5">
              <p className="text-[#757575] font-bold text-sm ">COMPANY</p>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                Support
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                About HireTable
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm items-center flex">
                Joinus
                <span className="text-[#090909] ml-1 font-bold text-[8px] flex justify-center items-center rounded-3xl w-14 h-5 bg-[#FCEA10] gap-2 px-3 py-1">
                  HIRING
                </span>
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">Legal</span>
            </div>
          </div>
          <div className="flex sm:items-center sm:justify-end">
            <div className="flex flex-col gap-5">
              <p className="text-[#757575] font-bold text-sm ">COMPARE</p>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                HireTable vs. LinkedIn
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                HireTable vs. Indeed
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                HireTable vs. HireVue
              </span>
              <span className="text-[#FAFAFA] font-medium text-sm ">
                HireTable vs. SparkHire
              </span>
            </div>
          </div>
        </div>
        <div>
          <p className="text-[#FAFAFA] font-medium text-sm mb-8">
            © 2022 HireTable, Inc. Terms • Privacy • Cookie
          </p>
        </div>
      </div>
    </div>
  );
};

export { Footer };
