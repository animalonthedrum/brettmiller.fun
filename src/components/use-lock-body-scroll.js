import { useLayoutEffect } from 'react';

export default function useLockBodyScroll() {
  useLayoutEffect(() => {
   // Get original value of body overflow
   const originalStyle = window.getComputedStyle(document.body).overflow;  
   // Prevent scrolling on mount
   document.body.style.overflow = 'hidden';
   document.body.style.maxHeight = '100vh';
   // Re-enable scrolling when component unmounts
   return () => document.body.style.overflow = originalStyle;
  }, []); // Empty array ensures effect is only run on mount and unmount
}