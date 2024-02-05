export const generateRandomSeed = () => {
  let seed = "";
  let seedLength = Math.floor(Math.random() * (10 - 3)) + 4;
  for (let i = 0; i < seedLength; i++) {
    seed += String.fromCodePoint(Math.floor(Math.random() * 25) + 97);
  }
  return seed;
};
