import React from "react";
import Item from "../Item";
import Video from "../VideoPlayer";

const HireEasily = () => {
    const dataList = [
        {
            id: 1,
            title: "In-App chat & call feature.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 2,
            title: "Get hired by best restaurant.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 3,
            title: "Save your video responses.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 4,
            title: "Get In App response.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 5,
            title: "Employer feedback in your finger tips.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
        {
            id: 6,
            title: "No more ghosting.",
            desc: "HireTable is a product that reduces cost and increase the quality of hiring.",
        },
    ];
    return (
        <div className="flex flex-col items-center">
            <p className="text-[#212121] font-bold text-[56px] px-[74px] py-16">
                Hire easily with HireTable.
            </p>
            <div className="flex items-center justify-center">
                <div className="flex flex-col mr-16 w-[614px] gap-2">
                    {dataList.map((item, index) => (
                        <Item
                            key={item.id}
                            title={item.title}
                            desc={item.desc}
                        />
                    ))}
                </div>
                <Video height={1002} width={608} />
            </div>
        </div>
    );
};

export default HireEasily;
