type func = (base: any, exponent?: any) => any;

const pow: func = (base, exponent) => {
  if (typeof base !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (typeof exponent !== 'undefined' && typeof exponent !== 'number') {
    throw new Error('INVALID_ARGUMENT');
  }

  if (!exponent && exponent !== 0) {
    return (innerExponent) => {
      if (typeof innerExponent !== 'number') {
        throw new Error('INVALID_ARGUMENT');
      }

      return Math.pow(base, innerExponent);
    };
  } else {
    return Math.pow(base, exponent);
  }
};

export default pow;
