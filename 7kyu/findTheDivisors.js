const divisors1 = (integer) => {
  const result = [...Array(integer - 1).keys()].filter(
    (i) => integer % i === 0 && i > 1
  );

  return result.length === 0 ? `${integer} is prime` : result;
};

const divisors2 = (integer) => {
  const result = [...Array(Math.floor(integer / 2) + 1).keys()].filter(
    (i) => integer % i === 0 && i > 1
  );

  return result.length === 0 ? `${integer} is prime` : result;
};
