var num1 =  document.getElementById('valor1')
var num2 =  document.getElementById('valor2')
var resultado = document.querySelector('span')


function soma(){
    resultado.innerHTML = parseInt(num1.value) + parseInt(num2.value)
    document.getElementById('hUm').innerHTML = "Monster Hunter World - Fatalis"
}

function subtra(){
    resultado.innerHTML = parseInt(num1.value) - parseInt(num2.value)
    document.getElementById('hunter').innerHTML = "Fatalis apareceu nas ruínas do Castelo Schrade. Reúna uma equipe e parta no serviço especial 'O Dragão Sombrio' para encarar esse inimigo lendário!"
}

function multi(){
    resultado.innerHTML = parseInt(num1.value) * parseInt(num2.value)
    document.getElementById("hunterimg").src="./img/fatalis.jpg"
}
function divi(){
    resultado.innerHTML = parseInt(num1.value) / parseFloat(num2.value)
}