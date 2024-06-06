const answer = ['chuis bieng', 'je suis bieng', 'bieng','jsuis bieng'];
const hint = 'Indice : C\'est un meme drôle';
let userInput = document.getElementById('userInput');
let message = document.getElementById('message');
let submitBtn = document.getElementById('submitBtn');
let wrongAttempts = 0;
let shake = false;
let isWrong = false;
let showHintButton = false;

message.textContent = 'Trouve le mot ou la phrase\nIndice : C\'est un meme drôle';

submitBtn.addEventListener('click', checkAnswer);
userInput.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') {
    checkAnswer();
  }
});

function checkAnswer() {
  if (answer.includes(userInput.value.toLowerCase())) {
    message.textContent = 'Bravo, t\'as trouvé le mot mon bébé!J\'ai une surprise pour toi dans le vessellier !';
    resetGame();
  } else {
    wrongAttempts++;
    shake = true;
    isWrong = true;
    message.textContent = getRandomMessage();
    userInput.classList.add('shake', 'wrong');
    setTimeout(() => {
      shake = false;
      isWrong = false;
      userInput.classList.remove('shake', 'wrong');
    }, 500);
    if (wrongAttempts === 3) {
      showHintButton = true;
      let hintBtn = document.createElement('button');
      hintBtn.textContent = 'Indice';
      hintBtn.style.position = 'absolute';
      hintBtn.style.left = `${Math.random() * (window.innerWidth - 100)}px`;
      hintBtn.style.top = `${Math.random() * (window.innerHeight - 100)}px`;
      hintBtn.addEventListener('click', showHint);
      document.body.appendChild(hintBtn);
    }
  }
}

function showHint() {
  // Supprime le bouton d'indice
  this.parentNode.removeChild(this);
  
  // Crée l'élément d'image
  let hintImage = new Image();
  hintImage.src = 'image.png';
  hintImage.style.position = 'absolute';
  hintImage.style.left = '50%';
  hintImage.style.top = '50%';
  hintImage.style.transform = 'translate(-50%, -50%)'; // Centrer l'image
  document.body.appendChild(hintImage);
}

function getRandomMessage() {
  const messages = [
    'Oh lala c\'est pas bon',
    'Recommence sale esclave',
    'Not bad but bad'
  ];
  return messages[Math.floor(Math.random() * messages.length)];
}


// function resetGame() {
//   userInput.value = '';
//   wrongAttempts = 0;
//   showHintButton = false;
//   answer = prompt('Entrez un nouveau mot ou une nouvelle phrase à deviner') || 'mot de passe';
//   hint = prompt('Entrez un indice pour ce mot ou cette phrase') || 'Indice : C\'est un mot commun';
//   message.textContent = 'Entrez le mot ou la phrase';
//   let hintBtns = document.querySelectorAll('body > button');
//   hintBtns.forEach(btn => btn.remove());
// }

// "Bravo, t'as trouvé le mot mon bébé!J'ai une surprise pour toi dans le vessellier !"
// "C\'est un meme drôle"
// const targetWords = ["chuis bieng", "je suis bieng", "bieng","jsuis bieng"];