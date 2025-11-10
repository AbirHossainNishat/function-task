function transformNumber(n) {
  if (n % 2 === 0) { // even
    return n / 2;
  } else {            // odd
    return n * 2;
  }
}


function count_zero(binaryString) {
  let count = 0;

  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '0') {
      count++;
    }
  }

  return count;
}
