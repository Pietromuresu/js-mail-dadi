// Controllo mail per il Login

const mailList = [
  'ginopaoli@gmail.com', 
  'barbaradurso@gmail.com',
  'muresupietro66@gmail.com',
  'lodovicoguelfi@gmail.com',
  'federicolucia@gmail.com',
  'fabriziocorona@gmail.com',
  'fabriziotarducci@gmail.com',
  'loremipsum@gmail.com',
  'pierochiambretti@gmail.com',
  'pupo@gmail.com',
  'enzoiacchetti@gmail.com',
  'ginostrada@gmail.com',
  'lucianalitizzetto@gmail.com',
  'giannisperti@gmail.com',
  'mariadefilippi@gmail.com'
]

const signIn = document.getElementById('welcome');
const userMail = document.getElementById('input').value; 
const send = document.getElementById('send');
const start = document.getElementById('container-start');
const play = document.getElementById('container-play');
console.log(userMail);

send.addEventListener( 'click', function(){
  
  
    const userMail = document.getElementById('input').value; 

    if (mailList.includes(userMail)) {
  
      start.classList.add('d-none')
      play.classList.remove('d-none')

    }else {
      signIn.innerHTML = 'Registrati per giocare'; 

  
    }
  
  }
)

  document.addEventListener( 'keydown', function(){
  if (event.key === 'Enter') {
    const userMail = document.getElementById('input').value; 

    if (mailList.includes(userMail)) {
      signIn.innerHTML = 'Ora possiamo giocare'; 
      start.classList.add('d-none')
      play.classList.remove('d-none')

      
    }else {
      signIn.innerHTML = 'Registrati per giocare';  
  
    }

  }
  }

  )


  // Dadi 

const gioca = document.getElementById('gioca');
const winnerIs = document.getElementById('winnerIs');

gioca.addEventListener('click', function(){

  const userNumber = Math.floor(Math.random() *  7);
  console.log(userNumber);
  const computerNumber = Math.floor(Math.random() *  7);
  console.log(computerNumber);

  if (userNumber > computerNumber ) {
   winnerIs.innerHTML = 'Complimenti!  Hai vinto tu!'; 
   winnerIs.classList.remove('looser');
   winnerIs.classList.add('winner');
  }else if (userNumber < computerNumber ){
   winnerIs.innerHTML = 'Oh mi spiace!  Ho vinto io!';
    winnerIs.classList.remove('winner');
    winnerIs.classList.add('looser');


  }else {
   winnerIs.innerHTML = "Complimenti!  E' patta!"
   winnerIs.classList.remove('winner');
   winnerIs.classList.remove('looser');

  }

  const userPart = document.getElementById('userPart');
  const computerPart = document.getElementById('computerPart');


  userPart.innerHTML =` 
  Tu: <br>
  ${userNumber}
  `; 
  computerPart.innerHTML = ` 
  Computer: <br>
  ${computerNumber}
`;
})





