import React, { useState } from "react";
import { IoIosAddCircle, IoMdCloseCircle } from "react-icons/io";
import Item from "../Item";
const FAQs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const FAQList = [
        {
            id: 1,
            title: "Get hired by best restaurants.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 2,
            title: "In-App chat & call feature.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 3,
            title: "Save your video responses.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
    ];
    return (
        <div className="flex items-center flex-col px-[74px] py-16 gap-14">
            <p className="text-[#212121] font-bold text-[56px]">
                Frequently asked questions
            </p>
            {FAQList.map((item, index) => (
                <Item key={item.id} title={item.title} desc={item.desc} />
            ))}
        </div>
    );
};

export default FAQs;
