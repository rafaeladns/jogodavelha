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