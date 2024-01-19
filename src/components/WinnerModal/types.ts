import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

export interface WinnerModalProps {
  open: boolean;
  handleClose: () => void;
  winnerRef: React.RefObject<Player>;
}
