let counter = document.querySelector(".number");
let btnMas = document.querySelector("#suma");
let btnMenos = document.querySelector("#menos");
let btnCero = document.querySelector("#cero");
let i = 0;

btnMas.addEventListener('click',()=>{
 i++;
    counter.textContent = i;
    if(counter.textContent >= 0){
        counter.style.color = "white";
    }
});

btnMenos.addEventListener('click',()=>{
    i--;
    counter.textContent = i;
    if(counter.textContent < 0){
        counter.style.color = "red";
    }
    
})
btnCero.addEventListener('click',()=>{
    i = 0;
    counter.textContent = i;
})