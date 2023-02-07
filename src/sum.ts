const sum = (...args) => {
  if (args.length < 2) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }
  const notANubArr = args.filter((el) => typeof el !== 'number');
  if (notANubArr.length > 0) {
    throw new Error('INVALID_ARGUMENT');
  }
  return args.reduce((initial, item) => initial + item, 0);
};
export default sum;
