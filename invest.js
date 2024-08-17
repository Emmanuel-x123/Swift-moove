let cardNumInput = document.querySelector("#cardNum");


cardNumInput.addEventListener('keyup', () => {
   let cNum = cardNumInput.value
   cNum = cNum.replace(/\s/g, "")

   if(Number(cNum)){
    cNum = cNum.match(/.{1,4}/g)
    cNum = cNum.join(" ")
    cardNumInput.value = cNum
   }
  });
  