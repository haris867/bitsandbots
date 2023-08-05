export function calculateTotalPrice(gameList) {
  return gameList.reduce((total, game) => total + game.price, 0);
}
