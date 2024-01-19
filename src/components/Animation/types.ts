import { IPlayerProps, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

export interface AnimationProps extends IPlayerProps {
  animationRef: React.RefObject<Player>;
  onAnimationLoad?: () => void;
  onAnimationComplete?: () => void;
}
