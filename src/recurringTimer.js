const timers = {};

function recurringTimer(message, interval) {
  const timerId = setInterval(() => {
    console.log(message);
  }, interval);
  
  timers[timerId] = timerId;
  return timerId;
}

function stopRecurringTimer(timerId) {
  clearInterval(timerId);
  delete timers[timerId];
}

module.exports = { recurringTimer, stopRecurringTimer };