import { InteractiveBattleProps } from './types';
import * as styles from './styles';
import { Button, Paper, Typography } from '@mui/material';
import { Animation } from '../Animation';
import React from 'react';

export const InteractiveBattle: React.FC<InteractiveBattleProps> = ({
    battleRef,
    onAnimationComplete,
    onAnimationLoad,
    onPlayHandle
  }) => {

  return (
    <Paper elevation={2} sx={styles.paper}>
      <Typography variant="h3" component="h2">The Game</Typography>
      <Animation
        animationRef={battleRef}
        className="player"
        speed={0.8}
        onAnimationLoad={onAnimationLoad}
        onAnimationComplete={onAnimationComplete}
        src={'https://lottie.host/b62772f4-db01-4302-9c49-56be2e6b3ef2/IHZRjc3oKo.json'}
      />
      <Button variant="contained" onClick={onPlayHandle}>
        Start Battle
      </Button>
    </Paper>
  );
};
