// Utility to detect mobile devices and disable animations for better performance
export const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth < 768;
};

// Motion variants that disable animations on mobile
export const getMobileOptimizedVariants = (variants) => {
  if (isMobile()) {
    // Return static variants for mobile
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1 }
    };
  }
  return variants;
};

// Motion props that disable animations on mobile
export const getMobileOptimizedProps = (props) => {
  if (isMobile()) {
    return {
      ...props,
      initial: false,
      animate: false,
      whileHover: undefined,
      whileTap: undefined,
      transition: undefined
    };
  }
  return props;
};