

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

const userMail = prompt ('Inserisci la tua mail');
console.log(userMail);

for (let i = 0; i < mailList.length; i++) {

  if (mailList.includes(userMail)) {
    console.log('Ora possiamo giocare');  
  }else {
    console.log('Registrati per giocare');
  }

}
