// Your code here
// Function to move the dodger left
function moveDodgerLeft() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
  }
}

// Function to move the dodger right
function moveDodgerRight() {
  const dodger = document.getElementById('dodger');
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);
  const game = document.getElementById('game');
  const gameWidth = game.clientWidth;

  if (left < gameWidth - 40) { // 40 is the width of the dodger
    dodger.style.left = `${left + 1}px`;
  }
}

// Event listener to handle keydown events
document.addEventListener('keydown', function(event) {
  if (event.key === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.key === 'ArrowRight') {
    moveDodgerRight();
  }
});
