import React from 'react';
import { HiCreditCard, HiHandThumbUp, HiPhone, HiRocketLaunch } from 'react-icons/hi2';

// 1. Data Array
const servicesData = [
  {
    icon: HiHandThumbUp,
    title: "100% Satisfaction Guaranteed",
    description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
    layout: 'col',
  },
  {
    icon: HiPhone,
    title: "24/7 Online Service",
    description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
    layout: 'row',
  },
  {
    icon: HiRocketLaunch,
    title: "Fast Delivery",
    description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
    layout: 'row',
  },
  {
    icon: HiCreditCard,
    title: "Payment With Secure System",
    description: "Lorem ipsum dolor sit amet consectetur. Suspendisse laoreet scelerisque morbi vulputate. Quisque bibendum eget id diam elementum fringilla duis.",
    layout: 'col',
  },
];


// 2. Reusable Service Card Component
const ServiceCard = ({ icon: Icon, title, description, layout }) => {
  const isVertical = layout === 'col';

  // Inner white box styling
  const innerClasses = isVertical
    ? 'flex flex-col items-center gap-y-4 bg-background h-full p-6'
    : 'flex flex-col lg:flex-row items-center gap-4 bg-background h-full p-6'; 

  return (
    <div className={`bg-[#f2f2f2] dark:bg-dark-gray h-full p-6 ${isVertical ? 'lg:w-full' : ''}`}>
      <div className={innerClasses}>
        {/* icon part */}
        <div className="flex justify-center items-center aspect-square h-16 w-16 bg-primary text-white text-[24px] rounded-full">
          <Icon />
        </div>

        {/* text part */}
        <div className={`flex flex-col gap-y-2 ${isVertical ? 'text-center' : ''}`}>
          <h3 className='font-prime font-normal text-[28px] text-dark-gray dark:text-white leading-9'>
            {title}
          </h3>
          <p className='font-second font-normal text-[12px] text-dark-gray dark:text-light-gray'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};


// 3. Main Service Component
const Service = () => {
  const [col1, rowCards, col2] = [
    servicesData[0], // 1st card for the first 1/4 column
    servicesData.slice(1, 3), // 2nd and 3rd cards for the middle 1/2 column
    servicesData[3]  // 4th card for the last 1/4 column
  ];

  return (
    <div className="container py-8 gap-8 gap-y-8 flex flex-col lg:flex-row">
      
      {/* 1st Column (1/4 width on large screens) */}
      <div className="lg:w-1/4">
        <ServiceCard {...col1} />
      </div>

      {/* 2nd Column (1/2 width on large screens) */}
      <div className="flex flex-col lg:w-1/2 gap-y-8">
        {rowCards.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* 3rd Column (1/4 width on large screens) */}
      <div className="lg:w-1/4">
        <ServiceCard {...col2} />
      </div>
    </div>
  );
};

export default Service;