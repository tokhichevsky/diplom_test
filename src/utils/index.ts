export function secondsToTimeString(secs: number) {
  const seconds = secs % 60;
  const minutes = Math.round((secs - seconds) / 60);
  return `${minutes} мин. ${seconds} сек.`
}
