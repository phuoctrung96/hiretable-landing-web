import React from 'react';

interface TooltipProps {
  children: React.ReactNode;
  text: string;
  bgColor: string;
  color: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  color,
  bgColor,
  children
}) => {
  return (
    <span className="group relative inline-block">
      <span
        className={`absolute hidden group-hover:flex top-20 -left-20 whitespace-nowrap -translate-y-full px-2 py-1 bg-[${bgColor}] rounded-md text-center text-[${color}] text-base after:content-[''] after:absolute after:left-1/2 after:-top-4 before:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-t-transparent after:border-b-[${bgColor}]`}
      >
        {text}
      </span>
      {children}
    </span>
  );
};

export { Tooltip };
