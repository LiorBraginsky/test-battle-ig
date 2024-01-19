import { Player, PlayerEvent } from '@lottiefiles/react-lottie-player';
import React from 'react';

import { AnimationProps } from './types';

export const Animation: React.FC<AnimationProps> = ({
    animationRef,
    src,
    className,
    onAnimationLoad,
    onAnimationComplete,
    ...rest
  }) => {

  const onEventHandler = (e: PlayerEvent) => {
    if (e === 'complete') {
      onAnimationComplete && onAnimationComplete();
    }

    if (e === 'load') {
      onAnimationLoad && onAnimationLoad();
    }
  };

  return (
    <Player
      ref={animationRef}
      key={src + String(className)}
      src={src}
      className={className}
      onEvent={onEventHandler}
      style={{ height: '300px', width: '300px' }}
      {...rest}
    />
  );
};
