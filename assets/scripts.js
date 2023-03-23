

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
console.log(userMail);

send.addEventListener( 'click', function(){
  
  
    const userMail = document.getElementById('input').value; 

    if (mailList.includes(userMail)) {
      signIn.innerHTML = 'Ora possiamo giocare';  
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
      
    }else {
      signIn.innerHTML = 'Registrati per giocare';  
  
    }

  }
  }

  )


  






