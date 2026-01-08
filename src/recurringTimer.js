/**
 * Function: recurringTimer
 * Description: Logs a message repeatedly at fixed intervals until stopped.
 *
 * Example Usage:
 * const timerId = recurringTimer("Hello!", 1000);
 * stopRecurringTimer(timerId); // Stops the recurring timer
 */
function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);

  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
}

module.exports = { recurringTimer, stopRecurringTimer };
