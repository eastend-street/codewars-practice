const maskify1 = (cc) =>
  cc
    .split('')
    .map((str, index) => (index < cc.length - 4 ? '#' : str))
    .join('');

const maskify2 = (cc) => {
  return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
};
