import React, { useState } from 'react';
import { NextPage } from 'next';
import { PricingPlanCard } from 'components/PricingPlanCard';
import { Header } from 'components/Header';
import { ComparationTable } from 'components/ComparationTable';
import { SwitchButton, EnumServiceItems } from 'components/shared/SwitchButton';
import { Footer } from 'components/Footer';
import { FAQs } from 'components/FAQs';
import styles from 'styles/pricing.module.css';

const SwitchButtonList: EnumServiceItems = [
  { id: 1, title: 'Monthly' },
  { id: 2, title: 'Yearly' }
];

const PricingPlans = [
  {
    id: 1,
    title: 'Starter',
    type: 1,
    price: 0,
    desc: 'FREE until you receive 100 candidate applications',
    titleBtn: 'FREE Forever',
    includes: [
      { id: 1, content: '100 candidates' },
      { id: 2, content: 'Unlimited job postings' },
      { id: 3, content: 'Unlimited messages' },
      { id: 4, content: 'Single location' }
    ]
  },
  {
    id: 2,
    title: 'Pro',
    isPopular: true,
    type: 2,
    price: 99,
    desc: 'Recommended for most businesses with single location',
    titleBtn: 'Get Started',
    includes: [
      { id: 1, content: 'Unlimited candidates' },
      { id: 2, content: 'Unlimited job postings' },
      { id: 3, content: 'Unlimited messages' },
      { id: 4, content: 'Single location' }
    ]
  },
  {
    id: 3,
    title: 'Customized',
    type: 3,
    isPopular: false,
    desc: 'Available for businesses and franchises with large application volume, custom branding or unique business models',
    titleBtn: 'Contact Sales',
    includes: [
      { id: 1, content: 'Volume discounts' },
      { id: 2, content: 'Custom branding' },
      { id: 3, content: 'Multiple locations' }
    ]
  }
];

const Pricing: NextPage = () => {
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
        <SwitchButton data={SwitchButtonList} />
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
};

export default Pricing;
