export default function GetRandomNumber(max, min = 0) {
  return Math.floor(Math.random() * max) + min;
}
