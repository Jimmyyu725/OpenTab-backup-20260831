require("./7.js");
(async () => {
  const {
    initI18n: t
  } = await Promise.all([require.e(4), require.e(5)]).then(require.bind(null, 6));
  await t();
  await Promise.all([require.e(0), require.e(1), require.e(2), require.e(3), require.e(26)]).then(require.bind(null, 604));
})();