export const a = t => {
  try {
    const e = localStorage.getItem(t);
    return JSON.parse(e);
  } catch (t) {
    return null;
  }
};