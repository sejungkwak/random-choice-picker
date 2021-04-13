const inputEl = document.getElementById('choicesInput');
const choiceEl = document.getElementById('choices');

inputEl.addEventListener('keyup', showChoice);

function showChoice(e) {
  const inputChoices = inputEl.value;
  const choiceArray = inputChoices.split(',')
  let output = '';

  if ( e.code === 'Comma' ) { return null };

  choiceArray.forEach(choice => {
    output += `<div class="choice">${choice}</div>`
  })
  choiceEl.innerHTML = output;

  if ( e.code === 'Enter' ) {
    inputEl.value = '';
    playPicker();
  } 
}

function playPicker() {
  const choices = document.querySelectorAll('.choice');
  const delay = 300 * choices.length;

  const playingPicker = setInterval(() => {
    randomPicker()
    setTimeout(() => {
      choices.forEach(choice => choice.classList.remove('choice-pick'))
    }, 100);
  }, 150)
  
  setTimeout(() => {
    clearInterval(playingPicker)
  }, delay)

  setTimeout(() => {
    randomPicker()
  }, delay + 100)
}

function randomPicker() {
  const choices = document.querySelectorAll('.choice');
  let randomNumber = Math.floor(Math.random() * choices.length);
  choices[randomNumber].classList.add('choice-pick');
}