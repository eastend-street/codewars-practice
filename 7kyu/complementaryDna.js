const DNAStrand = (dna) => {
  const dnaMap = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  return dna
    .split('')
    .map((char) => dnaMap[char])
    .join('');
};
