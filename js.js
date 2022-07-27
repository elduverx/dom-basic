const h1 = document.querySelector("h1")
const form = document.querySelector("#form")
const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")
const button = document.querySelector("#button")
const pResult = document.querySelector("#result")

form.addEventListener('submit', sumar)


function sumar(e){
    e.preventDefault();
    const sumaInput = btn1.value + btn2.value;
    pResult.innerText = "Resultado: " + sumaInput 
    
}

