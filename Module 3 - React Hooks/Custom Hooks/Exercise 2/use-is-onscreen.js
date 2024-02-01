import React from 'react';

/*
Here's the “pure JS” version once again:

  function pureJsVersion() {
    const wrapperElement =
      document.querySelector('.some-class');
  
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
  
      // `entry.isIntersecting` will be true if the
      // element is in the viewport, false if not.
    });
  
    observer.observe(wrapperElement);
  }

To unsubscribe, you can call:

  observer.disconnect();
*/

function useIsOnscreen(boxRef) {
  const [isOnScreen, setIsOnScreen] = React.useState(false);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsOnScreen(entry.isIntersecting);
    });

    observer.observe(boxRef.current);

    return () => {
      observer.disconnect();
    };
  }, [boxRef]);
  return isOnScreen;
}

export default useIsOnscreen;