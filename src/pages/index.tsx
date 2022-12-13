import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Logos from "../components/Logos";
import { useState } from "react";
import Video from "../components/VideoPlayer";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import HireEasily from "../components/HireEasily";
import { SwitchButtonList } from "../data/SwitchButton.content";
import SwitchButton from "../components/SwitchButton";
import HassleFreeProcess from "../components/HassleFreeProcess";
export default function Home() {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div>
            <Head>
                <meta
                    content="width=device-width, initial-scale=1"
                    name="viewport"
                />
            </Head>
            <Header />
            <main>
                <div className="rounded-b-[10000px] bg-black h-[1289px]">
                    <div className="flex items-center flex-col ">
                        <p className="text-white font-bold text-[56px] flex-grow-0 text-center">
                            <span className="text-[#FCEA10]">Inteview</span>{" "}
                            candidates <br />
                            with <span className="text-[#FCEA10]">
                                video
                            </span>{" "}
                            responses
                        </p>
                        <SwitchButton
                            openTab={openTab}
                            setOpenTab={setOpenTab}
                            data={SwitchButtonList}
                        />
                        <div className="relative w-full mt-5">
                            <div
                                className={
                                    openTab === 1
                                        ? "flex items-center justify-center gap-16 "
                                        : "hidden"
                                }
                                id="link1"
                            >
                                <Video height={525} width={295} />
                                <div className="hidden sm:flex w-[439.35px] h-[312px] gap-16 p-0 flex-col items-center">
                                    <p className=" flex items-center text-center font-medium text-xl text-[#9E9E9E]">
                                        HireTable is the #1 platform for
                                        restaurant hiring managers to post jobs,
                                        receive video interview responses, and
                                        connect with the candidates.
                                    </p>
                                </div>
                                <Video height={525} width={295} />
                                <Image
                                    src="/Vector.svg"
                                    width={439.35}
                                    height={128}
                                    alt="vector"
                                    className="absolute -bottom-60 sm:bottom-0 h-12 w-[164.76px] sm:h-32 sm:w-[439.35px]"
                                />
                            </div>

                            <div
                                className={
                                    openTab === 2
                                        ? "flex items-center justify-center gap-16"
                                        : "hidden"
                                }
                                id="link2"
                            >
                                <Video height={525} width={295} />
                            </div>
                        </div>
                    </div>
                </div>
                <Logos />
                <HassleFreeProcess />
                <HireEasily />
                <FAQs />
            </main>

            <Footer />
        </div>
    );
}
