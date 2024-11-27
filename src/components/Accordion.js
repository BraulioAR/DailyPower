'use client'
import { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border rounded-lg overflow-hidden shadow-sm"
        >
          <button
            onClick={() => toggleAccordion(index)}
            className="w-full flex justify-between items-center p-4 text-left font-medium text-gray-900 bg-gray-100 hover:bg-gray-200 transition"
          >
            {item.title}
            <span
              className={`transform transition-transform ${
                activeIndex === index ? 'rotate-180' : ''
              }`}
            >
              ▼
            </span>
          </button>
          <div
            className={`transition-all overflow-hidden ${
              activeIndex === index ? 'max-h-screen' : 'max-h-0'
            }`}
            style={{
              transitionDuration: '300ms',
            }}
          >
            <div className="p-4 text-gray-600 bg-white">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;