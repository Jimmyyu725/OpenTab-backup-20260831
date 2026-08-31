module.exports = function (t) {
  try {
    return {
      error: false,
      value: t()
    };
  } catch (t) {
    return {
      error: true,
      value: t
    };
  }
};