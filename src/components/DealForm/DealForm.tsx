/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from '../../services/api';

const DealForm: React.FC = () => {
  const router = useRouter();
  const [values, setValues] = useState({
    price: 0,
    location: 0,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    url: ''
  });

  const update = (data: any) => { setValues({ ...values, ...data }) }

  const submitData = async (e: any) => {
    e.preventDefault();
    axios.post('/custom/create', values).then((res: any) => {
      if (res.data && res.data.status !== false) {
        router.push('/deal/made');
      } else {
        alert(res.data.message)
      }
    }).catch((error: any) => {
      alert(error.message)
      console.log(error.message)
    })
  }
  return (
    <form className="bg-[#FAFAFA] items-center flex flex-1 flex-col py-16 px-[84px] justify-center rounded-[64px] shadow-[0_10px_24px_rgba(30,30,30,0.12)]">
      <div className="items-center flex flex-col">
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575]">
            How much are you willing to pay per month? *
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pointer-events-none">
              <span className="w-6 h-6 text-gray-500 ">$</span>
            </div>
            <input
              type="number"
              id="email-address-icon"
              onChange={(e: any) => update({ price: Number(e.target.value) })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full pl-10 p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575] ">
            How many locations do you have for your restaurant? *
          </label>
          <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pointer-events-none">
              <span className="w-6 h-6 text-gray-500 ">$</span>
            </div>
            <input
              type="number"
              id="email-address-icon"
              onChange={(e: any) => update({ location: Number(e.target.value) })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full pl-10 p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575] ">
            First name *
          </label>
          <div>
            <input
              type="text"
              id="email-address-icon"
              onChange={(e: any) => update({ firstName: e.target.value })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575] ">
            Last name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address-icon"
              onChange={(e: any) => update({ lastName: e.target.value })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575] ">
            Work email *
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address-icon"
              onChange={(e: any) => update({ email: e.target.value })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575] ">
            Phone *
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address-icon"
              onChange={(e: any) => update({ phone: e.target.value })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full p-2.5 "
            />
          </div>
        </div>
        <div className="mb-6 w-full">
          <label className="block mb-2 text-sm font-medium text-[#757575]">
            Business name or Yelp URL *
          </label>
          <div className="relative">
            <input
              type="text"
              id="email-address-icon"
              onChange={(e: any) => update({ url: e.target.value })}
              className="text-sm text-[#757575] bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer block w-full p-2.5 "
            />
          </div>
        </div>

        <p className="text-sm text-[#757575]">
          By confirming this information, I confirm that I have read and
          understood the HireTable Privacy Policy
        </p>
        <button
          className={`text-white mt-5 font-medium sm:font-bold text-sm flex justify-center items-center rounded-[64px] w-[93px]  sm:w-[280px] h-[45px] bg-[#BFBAFF] gap-2 px-3 py-1`}
          onClick={submitData}
        >
          Let's make a deal!
        </button>
      </div>
    </form>
  );
};

export { DealForm };
