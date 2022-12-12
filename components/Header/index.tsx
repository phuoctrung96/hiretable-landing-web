import Image from "next/image";
export default function Header() {
    return (
        <header>
            <div className="flex gap-[10px] px-[74px] py-[17px] items-center justify-between bg-black h-[86px]">
                <Image src="/Long.png" alt="logo" width={98} height={30} />

                <div className="hidden sm:flex items-center gap-8 ">
                    <button className="text-white font-bold text-base">
                        Pricing
                    </button>
                    <button className="text-white font-bold text-base">
                        Sign in
                    </button>
                    <button className="bg-[#5043FF] w-[124px] text-base font-bold h-12 px-3 py-6 rounded-[32px] text-white flex items-center justify-center">
                        Get started
                    </button>
                </div>
            </div>
        </header>
    );
}
