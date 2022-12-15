import { NextPage } from 'next';
import PricingPlanCard from '@/components/PricingPlanCard';
import Header from '@/components/Header';
import ComparationTable from '@/components/ComparationTable';
import { PricingPlans } from '@/constants/PricingPlans.content';
import SwitchButton from '@/components/shared/SwitchButton';
import { EnumServiceItems } from '@/constants/types';
import { useState } from 'react';
import Footer from '@/components/Footer';
import FAQs from '@/components/FAQs';
import styles from '../styles/pricing.module.css';
export default function PricingPage() {
  const SwitchButtonList: EnumServiceItems = [
    { id: 1, title: 'Monthly' },
    { id: 2, title: 'Yearly' }
  ];
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <Header />
      <main className={styles.bg}>
        <p className="text-white font-bold text-[56px] flex-grow-0 text-center mx-20 pt-16 pb-3">
          Simple pricing.
          <span className="text-[#FCEA10]">Happy hiring.</span>
        </p>
        <p className="text-white">Choose a best plan which suits your needs.</p>
        <SwitchButton
          data={SwitchButtonList}
          openTab={openTab}
          setOpenTab={setOpenTab}
        />
        <div className="flex flex-col sm:flex-row gap-16 mb-10 mt-16  items-center justify-evenly">
          {PricingPlans.map((item, index) => (
            <PricingPlanCard key={index} data={item} />
          ))}
        </div>
      </main>
      <ComparationTable data={PricingPlans} />
      <FAQs />
      <Footer isCircle={true} />
    </div>
  );
}
