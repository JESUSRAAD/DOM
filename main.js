for (let i = 1; i < 101; i++) {
    const botton=document.createElement("button")
    botton.innerHTML=i
    document.querySelector("section").appendChild(botton)
    botton.style.width="80px"
    botton.style.height="80px"
   if (i%2===0) {
     botton.style.backgroundColor="red"
     
   }else{
    botton.style.backgroundColor="blue"
   }
   if (i%5===0) {
     botton.style.color="green"
    
   }
}