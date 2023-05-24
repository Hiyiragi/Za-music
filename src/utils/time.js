//functions responsible for time modifications
export function formatSecondstoMSS(seconds) {
  return (seconds - (seconds %= 60)) / 60 + (9 < seconds ? ":" : ":0") + seconds;
}
