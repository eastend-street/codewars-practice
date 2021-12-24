function disemvowel1(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

const disemvowel2 = (str) => str.replace(/[aeiou]/gi, '');
