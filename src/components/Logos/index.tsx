import Image from "next/image";
const logoList = [
    {
        id: 1,
        url: "/image1.png",
    },
    {
        id: 2,
        url: "/image2.png",
    },
    {
        id: 3,
        url: "/image3.png",
    },
    {
        id: 4,
        url: "/image4.png",
    },
    {
        id: 5,
        url: "/image5.png",
    },
];
const Logos = () => {
    return (
        <div className="w-full flex items-center justify-between sm:px-16 py-[74px]">
            {logoList.map((logo, index) => (
                <Image
                    src={logo.url}
                    width={79}
                    height={77}
                    alt={logo.url}
                    key={logo.id}
                />
            ))}
        </div>
    );
};

export default Logos;
