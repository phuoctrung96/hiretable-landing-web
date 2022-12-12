import { NextPage } from "next";
import React, { useState } from "react";
import { IoIosAddCircle, IoMdCloseCircle } from "react-icons/io";
interface ItemProps {
    title: string;
    desc: string;
}
const Item: NextPage<ItemProps> = ({ title, desc }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className=" w-full " onClick={() => setIsOpen(!isOpen)}>
            <div
                className={`w-full rounded-[128px] p-8 gap-1 ${
                    isOpen ? "bg-[#E0E0E0]" : ""
                }`}
            >
                <div className="flex items-center justify-between">
                    <p className="font-bold text-xl ">{title}</p>
                    {isOpen ? (
                        <IoMdCloseCircle size={32} />
                    ) : (
                        <IoIosAddCircle size={32} color="#757575" />
                    )}
                </div>
                {isOpen && (
                    <p className="h-[72px] flex items-center font-medium text-xl">
                        {desc}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Item;
