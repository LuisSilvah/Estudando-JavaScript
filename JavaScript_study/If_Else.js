// Se a hora for entre 06:00 até 12:00 : Bom dia!
// Se a hora for entre 12:00 até 18:00 : Boa tarde!
// Caso ao contrário : Boa noite!

let hora = 21;

if (hora > 6 && hora < 12 ) {
    console.log('Bom dia!');
}
  else if (hora > 12 && hora < 18) {
    console.log('Boa tarde!');
} 
else {
    console.log('Boa noite!');
}




