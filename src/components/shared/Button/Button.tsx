import React from 'react';

interface ButtonProps {
  color: string;
  title: string;
  size: string;
  bg: string;
  classes?: string;
  onClick: Function;
}

const Button: React.FC<ButtonProps> = ({
  color,
  title,
  size,
  bg,
  classes,
  onClick
}) => {
  return (
    <button
      className={`${color} font-medium text-${size} leading-[150%] flex justify-center items-center rounded-[64px] h-[54px] ${bg} gap-2 px-4 py-3 ${classes}`}
      onClick={() => onClick()}
    >
      {title}
    </button>
  );
};

export { Button };
