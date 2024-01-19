import React from 'react';
import { Button, Box, Typography, Modal } from '@mui/material';
import { Animation } from '../Animation';
import * as styles from './styles';
import { WinnerModalProps } from './types';
import { getRandomWinner } from './utils/getRandomWinner';

export const WinnerModal: React.FC<WinnerModalProps> = ({
    winnerRef,
    open,
    handleClose
  }) => {
  const winner = getRandomWinner();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={styles.modalContainer}
    >
      <Box sx={styles.modalContent}>
        <Typography variant="h3" component="h2">{`The Winner is ${winner}`}</Typography>

        <Animation
          animationRef={winnerRef}
          className="winner"
          src={'https://lottie.host/77e10fff-a1b2-4b00-adf2-6b3242074aff/8GkiclBscu.json'}
          autoplay
          keepLastFrame
        />

        <Button variant="contained" onClick={handleClose}>
          Back to Home
        </Button>
      </Box>
    </Modal>
  );
};
