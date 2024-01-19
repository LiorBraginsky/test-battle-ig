import React from 'react';
import { Container, Box, CssBaseline } from '@mui/material';
import * as styles from './styles';
import { WinnerModal } from '../WinnerModal';
import { InteractiveBattle } from '../InteractiveBattle';
import { useGameControl } from './hooks/useGameControl';
import { TheGameProps } from './types';

export const TheGame: React.FC<TheGameProps> = () => {
  const {
    battleRef,
    winnerRef,
    setLoaded,
    open,
    onPlayHandle,
    onAnimationComplete,
    handleClose
  } = useGameControl();

  return (
    <Container component="main" disableGutters maxWidth={false}>
      <CssBaseline />
      <Box sx={styles.wrapper}>
        <InteractiveBattle
          battleRef={battleRef}
          onAnimationComplete={onAnimationComplete}
          onAnimationLoad={() => setLoaded(true)}
          onPlayHandle={onPlayHandle}
        />

        <WinnerModal
          open={open}
          handleClose={handleClose}
          winnerRef={winnerRef}
        />
      </Box>
    </Container>
  );
};
