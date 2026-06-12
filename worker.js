self.onmessage = ({ data: { board, moveCount } }) => {
  const result = deviousSpawn(board, moveCount);
  self.postMessage(result);
};
