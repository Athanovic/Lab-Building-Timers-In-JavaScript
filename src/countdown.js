function countdownTimer(startTime, interval) {
  let remaining = startTime;
  
  const timerId = setInterval(() => {
    console.log(`Time remaining: ${remaining} seconds`);
    remaining--;
    
    if (remaining < 0) {
      clearInterval(timerId);
    }
  }, interval);
  
  return timerId;
}

module.exports = countdownTimer;