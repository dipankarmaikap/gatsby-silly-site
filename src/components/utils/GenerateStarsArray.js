import GetRandomNumber from "./GetRandomNumber";

const isBrowser = () => typeof window !== "undefined";
export default function GenerateStarsArray(limit) {
  const arr = [];
  for (let i = 0; i < limit; i++) {
    arr.push({
      id: i,
      size: GetRandomNumber(15, 1),
      y: GetRandomNumber(isBrowser() && window.innerWidth),
      x: GetRandomNumber(isBrowser() && window.innerHeight),
      animationDuration: GetRandomNumber(20, 8),
      animationDelay: GetRandomNumber(15),
    });
  }
  return arr;
}
