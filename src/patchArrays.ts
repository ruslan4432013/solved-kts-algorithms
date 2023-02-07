// @ts-nocheck

const patchArrays = (): void => {
  Array.prototype.count = function () {
    return this.length;
  };

  Array.prototype.insert = function (index, item) {
    if (typeof index !== 'number' && item !== undefined) {
      throw new Error('INVALID_ARGUMENT');
    } else if (item === undefined) {
      this.push(index);
      return this;
    }

    if (index >= this.length) {
      this.push(item);
      return this;
    }

    if (index < 0) {
      this.unshift(item);
      return this;
    }

    this.splice(index, 0, item);

    return this;
  };

  Array.prototype.remove = function (item) {
    const index = this.indexOf(item);

    if (index !== -1) {
      this.splice(index, 1);
    }
    return this;
  };
};

export default patchArrays;
