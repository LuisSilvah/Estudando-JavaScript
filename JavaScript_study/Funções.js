function multiplica(num1,num2) {
    let resultado = 2 * 2;
    return resultado;
  }

  /* 
  Função de MULTIPLICAR
    --> 4
  */ 

  document.querySelector('h2').onclick = function() {
    console.log ('Ai! Pare de me cutucar!');
}

/* 
Função de:
    -> Clique no texto
    -> Exibir um alerta 
    --> Ai! Pare de me cutucar!'
*/

let image = document.querySelector('img');
  image.onclick = function () {
    let meuSrc = image.getAttribute('src');
      if (meuSrc === 'image/imagem01.png') {
        image.setAttribute ('src','image/imagem02.png');
      } else {
        image.setAttribute ('src','image/imagem01.png'); 
      }
  }

/* 
Função de clicar e trocar de foto
  -> Chamar a tag 'img'
  -> Chama o atributo 'src' dentro da tag 'img'
  -> If e Else que faça essa troca
  --> Resultado
*/


