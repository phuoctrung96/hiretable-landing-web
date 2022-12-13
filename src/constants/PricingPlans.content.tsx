export const PricingPlans = [
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
