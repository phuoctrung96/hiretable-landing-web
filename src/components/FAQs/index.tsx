import { useState } from "react";
import Item from "../Item";
import { FAQList } from "../../data/FAQs.content";
const FAQs = () => {
    return (
        <div className="flex items-center flex-col sm:px-[74px] sm:py-16 px-2 gap-14">
            <h4 className="text-center ">Frequently asked questions</h4>
            {FAQList.map((item, index) => (
                <Item key={item.id} title={item.title} desc={item.desc} />
            ))}
        </div>
    );
};

export default FAQs;
