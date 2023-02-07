const intersection = (firstArr?: any, secondArr?: any): number[] => {
  if (!firstArr || !secondArr) {
    throw new Error('INVALID_ARGUMENTS_COUNT');
  }

  if (!Array.isArray(firstArr) || !Array.isArray(secondArr)) {
    throw new Error('INVALID_ARGUMENT');
  }

  const newArr = [...firstArr, ...secondArr];

  newArr.forEach((item) => {
    if (typeof item !== 'number') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });

  const secondSet = new Set(secondArr);

  const intersection = new Set(
    [...firstArr].filter((element) => secondSet.has(element))
  );

  return Array.from(intersection);
};

export default intersection;
