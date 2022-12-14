import { NextPage } from 'next';
import Link from 'next/link';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Video from '@/components/VideoPlayer';

const made: NextPage = () => {
  return (
    <div>
      <Header />
      <div className="flex sm:flex-row flex-col items-center justify-evenly px-4 sm:px-20 py-16">
        <div className="flex flex-col justify-start items-center sm:w-[618px] mb-8">
          <p className=" font-bold sm:text-[56px] text-[40px] flex-grow-0 text-center sm:text-left">
            You just made a deal!
          </p>
          <p className="font-medium text-xl my-8 text-center">
            Available for businesses and franchises with large application
            volume, custom branding or unique business models
          </p>
          <Link
            href="/pricing"
            className={`text-white mt-5 font-medium sm:font-bold text-base flex justify-center items-center rounded-[64px] w-[280px] h-[45px] bg-[#5043FF] gap-2 px-3 py-1`}
          >
            Go to pricing
          </Link>
        </div>
        <Video width={337.5} height={600} />
      </div>
      <Footer isCircle={false} />
    </div>
  );
};

export default made;
