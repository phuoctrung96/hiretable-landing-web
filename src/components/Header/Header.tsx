import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { EnumServiceItems, SwitchButton } from 'components/shared/SwitchButton';
import { Button } from '../shared/Button';

const SwitchButtonList: EnumServiceItems = [
  { id: 1, title: 'Candidates' },
  { id: 2, title: 'Employers' }
];

const Header: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);
  return (
    <header className="fixed w-full top-0 py-[17px] bg-[#111111] h-20 z-50" >
      <div className='max-w-[1200px] flex gap-[10px] items-center justify-between m-auto'>
        <Link href="/" className="flex-1">
          <Image src="/logo.svg" alt="logo" width={98} height={30} />
        </Link>
        {scrollTop >= 300 && (
          <div className="hidden sm:flex">
            <SwitchButton data={SwitchButtonList} />
          </div>
        )}

        <div className="hidden sm:flex items-center justify-end gap-8 flex-1">
          <Link
            className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
            href="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
            href="/signin"
          >
            Sign in
          </Link>
          <Button
            title="Get Started"
            bg="bg-[#5043FF]"
            color="text-[#ffffff]"
            size="base"
          />
        </div>
        <button className="flex sm:hidden">
          <AiOutlineMenu color="white" size={46} />
        </button>
      </div>
    </header>
  );
};

export { Header };
