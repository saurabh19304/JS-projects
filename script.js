const input = document.getElementById("user-input");
const submit = document.getElementById("input-button")


submit.addEventListener('click', () => {

  const userInput = input.value.trim();

  rockPaperScissor(userInput);
})

function rockPaperScissor(userInput){
   
   input.focus();
   input.select();

   const computerValue = Math.floor(Math.random() * 3);
   const scissor = 0;
   const rock = 1;
   const paper = 2; 

  if( userInput === "scissor"){
      if(computerValue === 0){
        console.log("tie");
      }
      else if(computerValue === 1){
        return console.log("you lost");
      }
      else if(computerValue === 2){
        return console.log("you won computer lost")
      }
  }
  if( userInput === "rock"){
      if(computerValue === 0){
        console.log("you wont");
      }
      else if(computerValue === 1){
        return console.log("tie");
      }
      else if(computerValue === 2){
        return console.log("you won and the computer lost")
      }
  }
  if( userInput === "paper"){
      if(computerValue === 0){
        console.log("you lost computer won");
      }
      else if(computerValue === 1){
        return console.log("you won");
      }
      else if(computerValue === 2){
        return console.log("tie")
      }
  }

}
