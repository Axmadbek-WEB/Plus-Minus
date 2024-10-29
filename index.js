const input=document.getElementById("input");
const send=document.getElementById("send");
const son=document.getElementById("son");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const colorInput=document.getElementById("color-input");


send.addEventListener("click",()=>{
    if(input.value.trim().length<1){
        alert("Son kiriting !!")
    }else{
        son.textContent=input.value;
        input.value=0;
    }
})

plus.addEventListener("click",()=>{
    son.textContent=+son.textContent+1;
})
minus.addEventListener("click",()=>{
    son.textContent=+son.textContent-1;
})


colorInput.addEventListener("input",()=>{
       son.style.color=colorInput.value;     
})