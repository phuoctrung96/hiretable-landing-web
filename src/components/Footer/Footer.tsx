import Image from 'next/image';
import React, { useState } from 'react';
import { FooterContent } from './Footer.content';

interface FooterProps {
  isCircle: boolean;
}

const Footer: React.FC<FooterProps> = ({ isCircle }) => {
  const [isHoverIcon, setIsHoverIcon] = useState(false);
  return (
    <footer
      className={`flex flex-col justify-center ${
        isCircle && 'rounded-tl-full rounded-tr-full'
      } bg-[#111111] sm:px-[74px] px-4`}
    >
      {isCircle && (
        <div className="flex flex-col items-center h-[440px] sm:h-[722px] justify-center">
          <p className="text-[#FAFAFA] font-bold text-[28px] sm:text-[44px] pt-0 sm:pt-36 mb-8 text-center">
            Start winning your candidates
          </p>
          <div className="flex h-[164px] w-[164px] items-center">
            <Image
              src="/text-arrow-get-started.svg"
              className={`absolute ${isHoverIcon && 'animate-spin-slow'}`}
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
      <div className="w-full pt-8">
        <div className="flex flex-col max-w-[1200px] m-auto">
          <Image src="/logo.svg" alt="logo" width={98} height={34} />
          <div className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between mt-16 mb-10">
            {FooterContent.map((section, index) => (
              <div
                key={index}
                className={`flex sm:items-center mb-6 ${
                  index === 0
                    ? 'sm:justify-start'
                    : index === 3
                    ? 'sm:justify-end'
                    : 'sm:justify-center'
                }`}
              >
                <div className="flex flex-col gap-5">
                  <p className="text-[#757575] font-bold text-sm ">
                    {section.sectionTitle}
                  </p>
                  {section.sectionContent.map((item, idx) => (
                    <span
                      key={`${section.sectionTitle}-${idx}`}
                      className={`text-[#FAFAFA] font-medium text-sm cursor-pointer ${
                        item.className ? item.className : ''
                      }`}
                    >
                      {item.name}
                      {item.subName && (
                        <span
                          className={`${
                            item.subClassName ? item.subClassName : ''
                          }`}
                        >
                          {item.subName}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div>
            <p className="text-[#FAFAFA] font-medium text-sm mb-8 cursor-pointer">
              © 2022 HireTable, Inc. Terms • Privacy • Cookie
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
