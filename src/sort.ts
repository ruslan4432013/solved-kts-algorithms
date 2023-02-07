const sort = (sentence: string | any) => {
  if (typeof sentence === 'string') {
    const lowerSentence = sentence.toLowerCase();

    const wordList = lowerSentence.split(' ');

    const sortedWordList = wordList.sort((a, b) => a.length - b.length);

    const unicodeSortList = sortedWordList.map((el) =>
      Array.from(el).sort().join('')
    );
    return unicodeSortList.join(' ');
  } else {
    throw new Error('INVALID_ARGUMENT');
  }
};

export default sort;
