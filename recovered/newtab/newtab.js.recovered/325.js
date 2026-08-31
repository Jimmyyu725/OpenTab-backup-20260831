module.exports = function (t, e, n, r, i) {
  t.config = e;
  if (n) {
    t.code = n;
  }
  t.request = r;
  t.response = i;
  t.isAxiosError = true;
  t.toJSON = function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: this.config,
      code: this.code
    };
  };
  return t;
};