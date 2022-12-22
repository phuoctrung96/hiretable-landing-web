import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { useCommonContext } from 'contexts/CommonContext';
import { Button } from '../shared/Button';
import { SwitchButton, EnumServiceItems } from '../shared/SwitchButton';

const SwitchButtonList: EnumServiceItems = [
  { label: 'Candidates', value: 'candidates' },
  { label: 'Employers', value: 'employers' }
];

const Header: React.FC = () => {
  const router = useRouter();
  const { selectedRole, setSelectedRole } = useCommonContext();
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isShowTab, setIsShowTab] = useState(true);

  useEffect(() => {
    setIsShowTab(router.pathname !== '/pricing');
  }, [router.pathname]);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollTop]);

  const handleChangeRole = (role: string) => {
    setSelectedRole(role);
  };

  const handleRegister = () => {
    if (selectedRole === 'candidates') {
      router.push('https://candidate.develop.hiretable.com/register');
    } else if (selectedRole === 'employers') {
      router.push('https://employer.develop.hiretable.com/register');
    }
  };
  return (
    <header className="fixed w-full top-0 sm:px-0 px-8 py-[17px] bg-[#111111] h-[86px] z-50">
      <div className="max-w-[1200px] flex gap-[10px] items-center justify-between m-auto">
        <Link href="/" className="flex-1">
          <Image src="/logo.svg" alt="logo" width={98} height={30} />
        </Link>
        {scrollTop >= 364 && isShowTab && (
          <div className="hidden sm:flex">
            <SwitchButton
              data={SwitchButtonList}
              handleChange={(role: string) => handleChangeRole(role)}
              value={selectedRole}
            />
          </div>
        )}
        
        <div className="hidden sm:flex items-center justify-end gap-8 flex-1">
          {selectedRole === 'employers' && (
            <Link
              className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
              href="/pricing"
            >
              Pricing
            </Link>
          )}
          <Link
            className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
            href={
              selectedRole === 'candidates'
                ? 'https://candidate.develop.hiretable.com/signin'
                : 'https://employer.develop.hiretable.com/signin'
            }
          >
            Sign in
          </Link>
          <Button
            title="Get Started"
            bg="bg-[#5043FF]"
            color="text-[#ffffff] hover:text-[#FCEA10]"
            size="base"
            onClick={() => handleRegister()}
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
