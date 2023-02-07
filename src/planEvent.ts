const planEvent = (cb, time) => {
  if (typeof cb !== 'function') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof time !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (time <= 0) {
    return new Promise((resolve) => resolve(cb()));
  }
  const promise = new Promise((resolve) =>
    setTimeout(() => resolve(cb()), time)
  );
  return Promise.race([promise]);
};

export default planEvent;
