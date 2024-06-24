function throttle(callback, limit) {
  let waiting = false;
  return function () {
    if (!waiting) {
      callback.apply(this, arguments);
      waiting = true;
      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
}

function advaceThrottle(callback, limit) {
  let waiting = false;
  let lastCall = 0;
  return function () {
    const now = new Date().getTime();
    if (now - lastCall < limit) {
      return;
    }
    lastCall = now;
    callback.apply(this, arguments);
  };
}

export { throttle };
