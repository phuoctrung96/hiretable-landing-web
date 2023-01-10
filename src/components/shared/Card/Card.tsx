import React from 'react';

const Card: React.FC<{
  className: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return (
    <div
      className={`flex flex-col h-[560px] items-start w-[344px] rounded-[64px] p-8 ${className}`}
    >
      {children}
    </div>
  );
};

export { Card };
