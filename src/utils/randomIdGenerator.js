export default function randomIdGenerator() {
  return String(Math.random().toFixed(5)).slice(2);
}
