export const getRandomWinner = (): string => {
  const winners = ['Player 1', 'Player 2'];
  const randomIndex = Math.floor(Math.random() * winners.length);
  return winners[randomIndex];
};
