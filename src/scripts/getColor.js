let currentColor = 0;
export function getColor(arr, id) {
  id = arr[currentColor];

  if (currentColor === arr.length) {
    currentColor = 0;
  } else {
    currentColor++;
  }

  return id;
}
