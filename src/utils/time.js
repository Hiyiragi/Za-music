//functions responsible for time modifications
export function formatSecondstoMSS(sec) {
  if (!sec) return "0:00";
  let seconds = Math.round(sec);
  return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + Math.round(seconds);
}
