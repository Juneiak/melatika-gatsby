import React from "react";

function useWidthMediaMatch(media) {
  const [isMatch, setIsMatch] = React.useState(false);

  React.useEffect(() => {
    const handleMediaChange = (evt) => {
      if (evt.matches !== isMatch) setIsMatch(evt.matches)
    }
    const mediaQuire = window.matchMedia('(max-width: 460px)');
    
    mediaQuire.addEventListener('change', handleMediaChange)
    handleMediaChange(mediaQuire)
    
    return () => mediaQuire.removeEventListener('change', handleMediaChange)
  }, [media]);

  return isMatch;
}

export default useWidthMediaMatch;
