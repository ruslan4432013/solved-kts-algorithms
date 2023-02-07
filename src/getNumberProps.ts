const getNumberProps = (obj) => {
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    const keyList: string[] = [];

    const sortKeys = (object: { [key: string]: any }, list: string[]) => {
      for (const [key, value] of Object.entries(object)) {
        if (typeof value === 'number') {
          list.push(key);
        }

        if (
          typeof value === 'object' &&
          !Array.isArray(value) &&
          value !== null
        ) {
          sortKeys(value, list);
        }
      }
    };

    sortKeys(obj, keyList);

    return keyList.sort();
  } else {
    throw new Error('INVALID_ARGUMENT');
  }
};

export default getNumberProps;
