"use client";

import { useEffect } from "react";

export default function ScrollHandler() {
  useEffect(() => {
    const scrollableElements = document.querySelectorAll('.scroll-container');

    scrollableElements.forEach((element) => {
      let isScrolling;

      element.addEventListener('scroll', () => {
        element.classList.add('scrolling');

        clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          element.classList.remove('scrolling');
        }, 300); // Mantén el color durante 300ms después del scroll
      });
    });

    // Cleanup
    return () => {
      scrollableElements.forEach((element) => {
        element.removeEventListener('scroll', () => {});
      });
    };
  }, []);

  return null;
}