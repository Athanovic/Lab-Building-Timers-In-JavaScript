/**
 * Function: countdownTimer
 * Description: Creates a countdown timer that logs the remaining time at regular intervals and stops at 0.
 *
 * Example Usage:
 * countdownTimer(10, 1000); // Logs remaining time every second for 10 seconds.
 */
function countdownTimer(startTime, interval) {
  let remainingTime = startTime;

  const timerId = setInterval(() => {
    console.log(remainingTime);

    if (remainingTime === 0) {
      clearInterval(timerId);
    }

    remainingTime--;
  }, interval);

  return timerId;
}

// Export as object to match Jest test
module.exports = { countdownTimer };
