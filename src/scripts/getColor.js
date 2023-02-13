export function getColor(arr) {
  let currentColor = 0;

  return function newColor(event) {
    event.target.style.color = arr[currentColor];
    currentColor++;

    if (currentColor === arr.length) {
      currentColor = 0;
    }
  };
}
