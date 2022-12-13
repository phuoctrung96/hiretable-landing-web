import { NextPage } from "next";
import React from "react";

interface ButtonProps {
    color: string;
    title: string;
    size: string;
    bg: string;
}

const Button: NextPage<ButtonProps> = ({ color, title, size, bg }) => {
    return (
        <button
            className={`${color} ml-1 font-medium sm:font-bold text-${size} flex justify-center items-center rounded-[64px] w-[93px]  sm:w-[179.67px] h-[54px] ${bg} gap-2 px-3 py-1`}
        >
            {title}
        </button>
    );
};

export default Button;
