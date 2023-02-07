const removeAnagrams = (array: string[] | any) => {
  if (!Array.isArray(array)) {
    throw new Error('INVALID_ARGUMENT');
  }

  array.forEach((el) => {
    if (typeof el !== 'string') {
      throw new Error('INVALID_ELEMENT_IN_ARRAY');
    }
  });

  const allWords: string[] = JSON.parse(JSON.stringify(array));

  const sortedAllWords: string[] = array.map((el) =>
    el.split('').sort().join('')
  );

  const nonSortedItems: string[] = [];

  allWords.forEach((itemNonSorted) => {
    const lengthOf = sortedAllWords.filter(
      (itemSorted) => itemSorted === itemNonSorted.split('').sort().join('')
    ).length;

    if (lengthOf > 1) {
      nonSortedItems.push(itemNonSorted);
    }
  });

  nonSortedItems.forEach((elem) => {
    const index = allWords.indexOf(elem);
    if (index !== -1) {
      allWords.splice(index, 1);
    }
  });

  return allWords;
};

export default removeAnagrams;
