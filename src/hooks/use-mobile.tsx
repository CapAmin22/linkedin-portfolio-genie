
import React, { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    
    // Check on initial render
    checkIfMobile();
    
    // Set up event listener
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    
    // Modern approach to handle mediaQuery changes
    mql.addEventListener("change", checkIfMobile);
    
    // Clean up event listener
    return () => mql.removeEventListener("change", checkIfMobile);
  }, []);

  return isMobile;
}
