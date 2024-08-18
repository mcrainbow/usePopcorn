export function calcAvarage(arr) {
  return arr.reduce((acc, cur, i, curArray) => acc + cur / curArray.length, 0);
}
