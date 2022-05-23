import React from 'react';

const useWindowDimensions = () => {

  const [windowDimensions, setWindowDimensions] = React.useState({width: 1920, height: 1024});

  React.useEffect(() => {
    const getWindowDimensions = () => {
      const { innerHeight: height, innerWidth: width } = window;
      return { width, height };
    };
    setWindowDimensions(getWindowDimensions())

    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener('resize', handleResize);
    return () => { return window.removeEventListener('resize', handleResize); };
  }, []);

  return windowDimensions;
};

export default useWindowDimensions;