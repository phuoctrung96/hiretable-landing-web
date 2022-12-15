import { PricingPlans } from '@/constants/PricingPlans.content';
import React from 'react';
import DealForm from '../DealForm';
import PricingPlanCard from '../PricingPlanCard';

interface DealPopUpProps {
  isOpen: boolean;
  setIsOpen: Function;
}

const DealPopUp: React.FC<DealPopUpProps> = ({ isOpen, setIsOpen }) => {
  return (
    <div className="z-50">
      {!isOpen ? null : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-xl text-black fixed top-4 right-4 z-10"
        >
          x
        </button>
      )}
      <div
        className={`top-0 right-0 fixed flex items-center justify-center bg-white h-full p-10 shadow-md ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } ease-in-out duration-300`}
      >
        <div className="flex flex-col sm:flex-row gap-16 mb-10 mt-16 p-10  items-center justify-evenly ">
          <DealForm />
        </div>
      </div>
    </div>
  );
};

export default DealPopUp;
