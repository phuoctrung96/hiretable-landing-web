import { NextPage } from 'next';
import React from 'react';
import { EnumServiceItems } from './types';

interface SwitchButtonProps {
  openTab: number;
  setOpenTab: Function;
  data: EnumServiceItems;
}

const SwitchButton: NextPage<SwitchButtonProps> = ({
  openTab,
  setOpenTab,
  data
}) => {
  return (
    <ul
      className="bg-[#212121] mt-16 text-sm  rounded-full inline-flex"
      role="tablist"
    >
      {data?.map(item => (
        <li className=" flex-auto text-center" key={item.id}>
          <a
            className={
              'text-xs font-bold px-5 py-3  rounded-full block  ' +
              (openTab === item.id
                ? 'text-[#212121] bg-[#FCEA10]'
                : 'text-[#757575] bg-none')
            }
            onClick={e => {
              e.preventDefault();
              setOpenTab(item.id);
            }}
            data-toggle="tab"
            href="#link1"
            role="tablist"
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SwitchButton;
