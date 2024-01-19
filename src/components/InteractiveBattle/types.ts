import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export interface InteractiveBattleProps {
  battleRef: React.RefObject<Player>,
  onAnimationComplete: () => void,
  onAnimationLoad: () => void,
  onPlayHandle: () => void,
}
