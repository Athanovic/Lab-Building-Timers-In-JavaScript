/**
 * Function: delayedReminder
 * Description: Logs a message after a specified delay in milliseconds.
 *
 * Example Usage:
 * delayedReminder("Time's up!", 2000);
 */
function delayedReminder(message, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(message);
      resolve(message);
    }, delay);
  });
}

module.exports = { delayedReminder };
