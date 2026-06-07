const input = document.getElementById("user-input");
const submit = document.getElementById("input-button")


submit.addEventListener('click', () => {
  const userInput = input.value.trim();

  rockPaperScissor(userInput);
})

function rockPaperScissor(userInput){
   
   input.focus();
   input.select();

   const computerValue = Math.random()

  if( userInput === "")

}
