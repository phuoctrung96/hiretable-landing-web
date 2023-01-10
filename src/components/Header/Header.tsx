import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
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
  const [scrollTop, setScrollTop] = useState(0);
  const [scrollDirection, setScrolllDirection] = useState('');
  const [isShowTab, setIsShowTab] = useState(true);
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  useEffect(() => {
    setIsShowTab(router.pathname === '/');
  }, [router.pathname]);

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollTop(e.target.documentElement.scrollTop);
      if (e.target.documentElement.scrollTop < scrollTop) {
        setScrolllDirection('up');
      } else {
        setScrolllDirection('down');
      }
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
  const handleOpenBurgerMenu = () => {
    setShowBurgerMenu(!showBurgerMenu);
  };
  return (
    <>
      {!showBurgerMenu && scrollDirection !== 'down' && (
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
              <Link
                className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
                href="/pricing"
              >
                Pricing
              </Link>
              <Link
                className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
                href={
                  selectedRole === 'candidates'
                    ? 'https://candidate.develop.hiretable.com/login'
                    : 'https://employer.develop.hiretable.com/signin'
                }
              >
                Sign in
              </Link>
              <Button
                title="Get Started"
                bg="bg-[#5043FF] hover:bg-[#3D31FE]"
                color="text-[#ffffff]"
                size="base"
                onClick={() => handleRegister()}
              />
            </div>
            <button
              className="flex sm:hidden w-8"
              onClick={() => handleOpenBurgerMenu()}
            >
              <AiOutlineMenu color="white" size={46} />
            </button>
          </div>
        </header>
      )}
      {showBurgerMenu && (
        <header className="fixed z-[90] w-screen h-screen top-0 px-8 py-[17px] bg-[#111111]">
          <div className="flex items-center justify-between m-auto gap-[10px]">
            <Link href="/" className="flex-1">
              <Image src="/logo.svg" alt="logo" width={98} height={30} />
            </Link>
            <button className="flex w-8" onClick={() => handleOpenBurgerMenu()}>
              <AiOutlineClose color="white" size={46} />
            </button>
          </div>
          <div className="flex flex-col items-center gap-8 py-16">
            <Link
              className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
              href="/pricing"
            >
              Pricing
            </Link>
            <Link
              className="text-white font-medium text-base cursor-pointer hover:text-[#FCEA10]"
              href={
                selectedRole === 'candidates'
                  ? 'https://candidate.develop.hiretable.com/login'
                  : 'https://employer.develop.hiretable.com/signin'
              }
            >
              Sign In
            </Link>
            <Button
              title="Get Started"
              bg="bg-[#5043FF] hover:bg-[#3D31FE]"
              color="text-[#ffffff]"
              size="base"
              classes="max-w-[311px] w-full"
              onClick={() => handleRegister()}
            />
          </div>
          <div className="flex justify-center pt-24">
            <SwitchButton
              data={SwitchButtonList}
              handleChange={(role: string) => handleChangeRole(role)}
              value={selectedRole}
            />
          </div>
          <div className="flex justify-center gap-8 py-8">
            <a className="text-sm text-[#757575] underline" href="#">
              Terms
            </a>
            <a className="text-sm text-[#757575] underline" href="#">
              Privacy
            </a>
            <a className="text-sm text-[#757575] underline" href="#">
              Cookie
            </a>
          </div>
        </header>
      )}
    </>
  );
};

export { Header };
