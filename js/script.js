//Selecionando x e o//
let x = document.querySelector(".x");
let o = document.querySelector(".o");
//Selecionando box//
let boxes = document.querySelectorAll(".box");
let buttons = document.querySelectorAll("#button-container button");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("message p");
let secondPlayer;

//Criar contador para saber quando vai ser a vez de cada jogador//
//Contador de jogadas//
let player1 = 0;
let player2 = 0;

//Adicionando o evento de click aos boxes(grades) do jogo da velha//
for(let i = 0; i < boxes.length; i++){
  //Quando usuário clica no box//
  boxes[i].addEventListener("click", function(){
    let el = checkEl(player1, player2);
    //verifica se já tem x ou o//
    if(this.childNodes.length == 0){
      let cloneEl = el.cloneNode(true);//Clonando os elementos//
    this.appendChild(cloneEl);
   //Computar jogada//
   if(player1 == player2) {
     player1++;
   }else{
     player2++;
   }
    }
    //Função que irá checar quem venceu o jogo//
    checkWinCondition();
  });
}

//Função verifica quem vai jogar//
function checkEl(player1, player2){
  if(player1 == player2){
    //x
    el = x;
  }else{
    //o
    el = o;
  }
  return el;
}

//Função que irá checar quem venceu o jogo//
function checkWinCondition() {
  let b1 = document.getElementById("block-1");
  let b2 = document.getElementById("block-2");
  let b3 = document.getElementById("block-3");
  let b4 = document.getElementById("block-4");
  let b5 = document.getElementById("block-5");
  let b6 = document.getElementById("block-6");
  let b7 = document.getElementById("block-7");
  let b8 = document.getElementById("block-8");
  let b9 = document.getElementById("block-9");

  //Checar horizontalmente//
  if(b1.childNodes.length > 0 && b2.childNodes.length > 0 && b3.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b2Child = b2.childNodes[0].className;
    let b3Child = b3.childNodes[0].className;
    if(b1Child == 'x' && b2Child == 'x' && b3Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b1Child == 'o' && b2Child == 'o' && b3Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  if(b4.childNodes.length > 0 && b5.childNodes.length > 0 && b6.childNodes.length > 0){
    let b4Child = b4.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    if(b4Child == 'x' && b5Child == 'x' && b6Child == 'x'){
      declareWinner('x');
    }else if(b4Child == 'o' && b5Child == 'o' && b6Child == 'o'){
      declareWinner('o');
    }
  }

  if(b7.childNodes.length > 0 && b8.childNodes.length > 0 && b9.childNodes.length > 0){
    let b7Child = b7.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b7Child == 'x' && b8Child == 'x' && b9Child == 'x'){
      declareWinner('x');
    }else if(b7Child == 'o' && b8Child == 'o' && b9Child == 'o'){
      declareWinner('o');
    }
  }

  //Checar verticalmente//
  if(b1.childNodes.length > 0 && b4.childNodes.length > 0 && b7.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b4Child = b4.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    if(b1Child == 'x' && b4Child == 'x' && b7Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b1Child == 'o' && b4Child == 'o' && b7Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  if(b2.childNodes.length > 0 && b5.childNodes.length > 0 && b8.childNodes.length > 0){
    let b2Child = b2.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b8Child = b8.childNodes[0].className;
    if(b2Child == 'x' && b5Child == 'x' && b8Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b2Child == 'o' && b5Child == 'o' && b8Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  if(b3.childNodes.length > 0 && b6.childNodes.length > 0 && b9.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className;
    let b6Child = b6.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b3Child == 'x' && b6Child == 'x' && b9Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b3Child == 'o' && b6Child == 'o' && b9Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  //Diagonal//
  if(b1.childNodes.length > 0 && b5.childNodes.length > 0 && b9.childNodes.length > 0){
    let b1Child = b1.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b9Child = b9.childNodes[0].className;
    if(b1Child == 'x' && b5Child == 'x' && b9Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b1Child == 'o' && b5Child == 'o' && b9Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  if(b3.childNodes.length > 0 && b5.childNodes.length > 0 && b7.childNodes.length > 0){
    let b3Child = b3.childNodes[0].className;
    let b5Child = b5.childNodes[0].className;
    let b7Child = b7.childNodes[0].className;
    if(b3Child == 'x' && b5Child == 'x' && b7Child == 'x'){
      // x venceu//
      declareWinner('x');
    }else if(b3Child == 'o' && b5Child == 'o' && b7Child == 'o'){
      //o venceu//
      declareWinner('o');
    }
  }

  //Deu velha//
  //Contador que vai executar os elementos um por um//
  //Contar todos os elementos que tem filho e quando chegar ao 9 vai imprimir a mensagem que deu velha e ninguém  venceu o jogo//
  let counter = 0;
  for(let i = 0; i < boxes.length; i++){
    if(boxes[i].childNodes[0] != undefined){
      counter++;
    }
  }
  if(counter == 9){
  }
}

//Criar função para declarar o vencedor, limpar o jogo e atualizar o placar//
function declareWinner(winner){
  let scoreboardX = document.querySelector("#scoreboard-1");
  let scoreboardO = document.querySelector("#scoreboard-2");
  let msg = '';
  if(winner == 'x'){
    scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1; // transformar a string em número inteiro e somar mais um ao placar//
    msg = 'O Jogador 1 venceu!';
  }else if(winner == 'o'){
    scoreboardO.textContent = parseInt(scoreboardO.textContent) + 1;
    msg = 'O Jogador 2 venceu!'
  }else{ //casp de velha//
    msg = 'Deu velha!';
  }

  //Exibir mensagem na tela//
  messageText.innerHTML = msg;
  messageContainer.classList.remove("hide"); //removendo a classe hide
}