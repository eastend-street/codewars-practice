const getCount1 = (str) =>
  str
    .split('')
    .reduce((acc, current) => (vowels.has(current) ? (acc += 1) : acc), 0);

const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

const getCount2 = (str) => str.match(/[aeiou]/g)?.length || 0;
