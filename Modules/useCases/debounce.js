function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

function debounceWithImmediete(callback, delay, isImmediate) {
  let timer;
  return function () {
    if (isImmediate) {
      callback.apply(this, arguments);
      isImmediate = false;
    }
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, arguments);
    }, delay);
  };
}

export { debounce, debounceWithImmediete };
