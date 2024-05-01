/*
const button = document.querySelector("button")

function generateButton(){
    const min = document.querySelector(".input-min").value
    const max = document.querySelector(".input-max").value

    console.log(min, max)
}

button.addEventListener("click", generateButton)

*/

function generateButton(){
    const min = Math.ceil(document.querySelector(".input-min").value)
    const max = Math.floor(document.querySelector(".input-max").value)
    const text = document.querySelector("p")


    if(max <= min){
        alert("O valor mínimo deve ser MENOR que o valor máximo.")
    } else{
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        text.innerHTML = result
    }
}
