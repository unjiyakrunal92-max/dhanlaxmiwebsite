import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition = ({ children }) => {
  const location = useLocation();
  const prevLocation = useRef(location);
  const contentRef = useRef(null);

  useEffect(() => {
    // Only animate if route actually changed
    if (prevLocation.current.pathname !== location.pathname) {
      if (contentRef.current) {
        // Remove animation class
        contentRef.current.classList.remove('page-enter');
        
        // Trigger reflow
        void contentRef.current.offsetWidth;
        
        // Add animation class
        contentRef.current.classList.add('page-enter');
      }
      prevLocation.current = location;
    }
  }, [location]);

  return (
    <div 
      ref={contentRef}
      className="page-content"
    >
      {children}
    </div>
  );
};

export default PageTransition;