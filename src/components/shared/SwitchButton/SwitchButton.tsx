import React from 'react';
import { Tooltip } from '../Tooltip';

export interface SwitchButtonItem {
  label: string;
  value: string;
}
export interface EnumServiceItems extends Array<SwitchButtonItem> {}
interface SwitchButtonProps {
  data: EnumServiceItems;
  switchBtnRef?: any;
  handleChange: (value: string) => void;
  value: string;
}

const SwitchButton: React.FC<SwitchButtonProps> = ({
  data,
  switchBtnRef,
  handleChange,
  value
}) => {
  return (
    <ul
      className="bg-[#212121] text-sm py-3 rounded-full inline-flex"
      role="tablist"
      ref={switchBtnRef}
    >
      {data?.map(item => (
        <>
          {item.value === 'yearly' ? (
            <Tooltip
              text="Save 30% for yearly subscription"
              bgColor="#FAFAFA"
              color="#212121"
            >
              <li className=" flex-auto text-center" key={item.value}>
                <a
                  className={
                    'text-base leading-[24px] sm:leading-[150%] font-medium px-8 py-3 rounded-full ' +
                    (value === item.value
                      ? 'text-[#212121] bg-[#FCEA10]'
                      : 'text-[#757575] bg-[#212121]')
                  }
                  onClick={e => {
                    e.preventDefault();
                    handleChange(item.value);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  {item.label}
                </a>
              </li>
            </Tooltip>
          ) : (
            <li className=" flex-auto text-center" key={item.value}>
              <a
                className={
                  'text-base leading-[24px] sm:leading-[150%] font-medium px-8 py-3 rounded-full ' +
                  (value === item.value
                    ? 'text-[#212121] bg-[#FCEA10]'
                    : 'text-[#757575] bg-[#212121]')
                }
                onClick={e => {
                  e.preventDefault();
                  handleChange(item.value);
                }}
                data-toggle="tab"
                href="#link1"
                role="tablist"
              >
                {item.label}
              </a>
            </li>
          )}
        </>
      ))}
    </ul>
  );
};

export { SwitchButton };
