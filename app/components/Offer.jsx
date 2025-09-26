// components/Offer.jsx
'use client'; // This component uses client-side state and effects

import React, { useState, useEffect } from 'react';
import { RxCross1 } from "react-icons/rx";

const Offer = ({
  mainText = "Discount 20% For New Member,", // Default main part of the text
  highlightText = "ONLY FOR TODAY!!"           // Default bold/highlighted part
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const localStorageKey = 'promotionalBannerDismissed'; // Unique key to store dismissal status

  useEffect(() => {
    // Check localStorage when the component mounts
    // If 'promotionalBannerDismissed' is not 'true', then show the banner
    const dismissed = localStorage.getItem(localStorageKey);
    if (dismissed !== 'true') {
      setIsVisible(true);
    }
  }, []); // Empty dependency array means this effect runs only once on mount

  const handleDismiss = () => {
    setIsVisible(false); // Hide the banner
    // Save the dismissal status in localStorage so it stays hidden on future visits
    localStorage.setItem(localStorageKey, 'true');
  };

  // Don't render anything if the banner is not visible
  if (!isVisible) {
    return null;
  }

  return (
    // Main banner container: fixed at the top, full width, 40px height (h-10), high z-index
    <div className='flex items-center bg-primary h-10 text-white px-4 z-50'>
      {/*
        This div contains the text.
        - `flex-col` by default (on small screens) to stack the text parts vertically.
        - `sm:flex-row` on small-medium screens and up to display them in a row.
        - `w-full justify-center items-center` to center the text content horizontally and vertically.
        - `font-second` and `text-[16px]` for your custom font and size.
      */}
      <div className="flex flex-col sm:flex-row w-full justify-center items-center font-second text-[16px]">
        <span>{mainText}</span>
        {/*
          The highlighted text part.
          - `font-bold` for bold styling.
          - `sm:ml-1` adds a small left margin when displayed in a row (sm screens and up)
            to separate it from the `mainText` part. This margin won't apply when stacked.
        */}
        <span className="font-bold sm:ml-1">{highlightText}</span>
      </div>
      {/*
        Dismiss button for the cross icon.
        - `ml-4` adds space between text and button.
        - `p-1 rounded-full hover:bg-white hover:text-primary` provides hover effects.
        - `focus:outline-none focus:ring-2 focus:ring-white` for accessibility.
      */}
      <button
        onClick={handleDismiss}
        aria-label="Dismiss promotional banner" // Good for accessibility
        className="ml-4 p-1 rounded-full hover:bg-white hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-white"
      >
        <RxCross1 className="text-[20px]"/> {/* Your cross icon */}
      </button>
    </div>
  );
}

export default Offer;