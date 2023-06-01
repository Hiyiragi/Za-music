//functions responsible for time modifications
export function formatSecondstoMSS(seconds) {
  if (!seconds) return "0:00";
  return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + Math.round(seconds);
}
