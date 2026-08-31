module.exports = function (e, t, n, r, o) {
  e.config = t;
  if (n) {
    e.code = n;
  }
  e.request = r;
  e.response = o;
  e.isAxiosError = true;
  e.toJSON = function () {
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
  return e;
};