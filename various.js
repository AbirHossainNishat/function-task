 
 
function make_avg(arr, size) {
  if (size === 0) return 0; // avoid division by zero

  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum += arr[i];
  }

  return sum / size;
}
