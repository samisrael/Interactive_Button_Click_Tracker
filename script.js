
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}
const counter = createCounter();

function handleClick() {
  const resultDiv = document.getElementById("result");
  const currentCount = counter();
  resultDiv.textContent = `Count: ${currentCount}`;
}
