import { useCallback, useState } from 'react';

type AnimationResponse = {
  animate: boolean;
  doAnimate: () => void;
};

const useAnimation = (): AnimationResponse => {
  const [animate, setAnimate] = useState(false);

  const doAnimate = useCallback(() => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 3000);
  }, []);

  return { animate, doAnimate };
};

export default useAnimation;
