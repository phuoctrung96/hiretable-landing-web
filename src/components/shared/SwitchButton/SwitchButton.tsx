import React, { useEffect, useRef } from 'react';
import { useTabContext } from 'contexts/TabContentProvider';

export interface SwitchButtonItem {
  id: number;
  title: string;
}
export interface EnumServiceItems extends Array<SwitchButtonItem> {}
interface SwitchButtonProps {
  data: EnumServiceItems;
  switchBtnRef?: any;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({ data, switchBtnRef }) => {
  const { tab, setTab } = useTabContext();
  return (
    <ul
      className="bg-[#212121] text-sm  rounded-full inline-flex"
      role="tablist"
      ref={switchBtnRef}
    >
      {data?.map(item => (
        <li className=" flex-auto text-center" key={item.id}>
          <a
            className={
              'text-base leading-[150%] font-medium px-8 py-3  rounded-full block  ' +
              (tab === item.id
                ? 'text-[#212121] bg-[#FCEA10]'
                : 'text-[#757575] bg-none')
            }
            onClick={e => {
              e.preventDefault();
              setTab(item.id);
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

export { SwitchButton };
