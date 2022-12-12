import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Logos from "../components/Logos";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Video from "../components/VideoPlayer";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import HireEasily from "../components/HireEasily";
export default function Home() {
    const [openTab, setOpenTab] = useState(1);

    return (
        <div className={styles.container}>
            <Header />
            <div className="rounded-b-[10000px] bg-black h-[1289px]">
                <div className="flex items-center flex-col ">
                    <p className="text-white font-bold text-[56px] flex-grow-0 text-center">
                        <span className="text-[#FCEA10]">Inteview</span>{" "}
                        candidates <br />
                        with <span className="text-[#FCEA10]">video</span>{" "}
                        responses
                    </p>
                    <ul
                        className="bg-[#212121] mt-16 text-sm  rounded-full inline-flex"
                        role="tablist"
                    >
                        <li className=" flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold px-5 py-3  rounded-full block  " +
                                    (openTab === 1
                                        ? "text-[#212121] bg-[#FCEA10]"
                                        : "text-[#757575] bg-none")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(1);
                                }}
                                data-toggle="tab"
                                href="#link1"
                                role="tablist"
                            >
                                Candidates
                            </a>
                        </li>
                        <li className=" flex-auto text-center">
                            <a
                                className={
                                    "text-xs font-bold px-5 py-3  rounded-full block  " +
                                    (openTab === 2
                                        ? "text-[#212121] bg-[#FCEA10]"
                                        : "text-[#757575] bg-none")
                                }
                                onClick={(e) => {
                                    e.preventDefault();
                                    setOpenTab(2);
                                }}
                                data-toggle="tab"
                                href="#link2"
                                role="tablist"
                            >
                                Employers
                            </a>
                        </li>
                    </ul>
                    <div className="relative w-full">
                        <div
                            className={
                                openTab === 1
                                    ? "flex items-center justify-center gap-16"
                                    : "hidden"
                            }
                            id="link1"
                        >
                            <Video height={525} width={295} />
                            <div className="w-[439.35px] h-[312px] gap-16 p-0 flex-col flex items-center">
                                <p className="text-white flex items-center text-center font-medium text-xl text-[#9E9E9E]">
                                    HireTable is the #1 platform for restaurant
                                    hiring managers to post jobs, receive video
                                    interview responses, and connect with the
                                    candidates.
                                </p>
                                <Image
                                    src="/Vector.svg"
                                    width={439.35}
                                    height={128}
                                    alt="vector"
                                />
                            </div>
                            <Video height={525} width={295} />
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
            <HireEasily />
            <FAQs />
            <Footer />
        </div>
    );
}
