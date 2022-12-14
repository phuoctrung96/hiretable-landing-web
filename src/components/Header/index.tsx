import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';
import Button from '../shared/Button';

export default function Header() {
  return (
    <header className="flex gap-[10px] px-[74px] py-[17px] items-center justify-between bg-black h-20">
      <Image src="/Long.png" alt="logo" width={98} height={30} />

      <div className="hidden sm:flex items-center gap-8 ">
        <Link
          className="text-white font-bold text-base cursor-pointer"
          href="/pricing"
        >
          Pricing
        </Link>
        <span className="text-white font-bold text-base cursor-pointer">
          Sign in
        </span>
        <Button
          title="Get started"
          bg="bg-[#5043FF]"
          color="text-[#ffffff]"
          size="base"
        />
      </div>
      <button className="flex sm:hidden">
        <AiOutlineMenu color="white" size={46} />
      </button>
    </header>
  );
}
