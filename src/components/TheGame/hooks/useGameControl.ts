import React, { useRef, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

interface UseGameControlReturn {
  battleRef: React.RefObject<Player>,
  winnerRef: React.RefObject<Player>,
  open: boolean,
  onPlayHandle: () => void,
  onAnimationComplete: () => void,
  setLoaded: React.Dispatch<React.SetStateAction<boolean>>,
  handleClose: () => void,
}

export const useGameControl = (): UseGameControlReturn => {
  const battleRef = useRef<Player>(null);
  const winnerRef = useRef<Player>(null);

  const [isLoaded, setLoaded] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const onPlayHandle = () => {
    if (battleRef.current && isLoaded) {
      battleRef.current.play();
    }
  };

  const onAnimationComplete = () => {
    handleOpen();
    if (winnerRef.current) {
      winnerRef.current?.play();
    }
  };

  return {
    battleRef,
    winnerRef,
    open,
    onPlayHandle,
    onAnimationComplete,
    setLoaded,
    handleClose
  };
};
