if (!Function.prototype.mapv2) {
  Function.prototype.mapv2 = function (callback, context) {
    const arr = this;
    if (!Array.isArray(arr)) {
      throw new Error("Array is not valid");
    }
    const result = [];

    for (let i = 0; i < arr.length; i++) {
      result.push(callback.apply(context, arr[i], i, arr));
    }
    return result;
  };
}
