var botei = document.getElementById('botei')
var botei2 = document.getElementById('botei2')
var botei3 = document.getElementById('botei3')
var botei4 = document.getElementById('botei4')

botei.addEventListener('click', somar)
botei2.addEventListener('click', subtrair)
botei3.addEventListener('click', multiplicar)
botei4.addEventListener('click', dividir)

function somar() {
    var num = document.getElementById('num')
    var num2 = document.getElementById('num2')
    var resp = document.getElementById('resp')
    var n1 = Number(num.value)
    var n2 = Number(num2.value)
    var soma = n1 + n2
    resp.innerHTML = `Sua soma entre ${n1} e ${n2} foi igual a ${soma}`
}

function subtrair() {
    var num = document.getElementById('num')
    var num2 = document.getElementById('num2')
    var resp = document.getElementById('resp')
    var n1 = Number(num.value)
    var n2 = Number(num2.value)
    var subtrai = n1 - n2
    resp.innerHTML = `Sua subtração entre ${n1} e ${n2} foi igual a ${subtrai}`
}

function multiplicar() {
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    let n1 = Number(num.value)
    let n2 = Number(num2.value)
    let multiplica = n1 * n2
    resp.innerHTML = `Sua multiplicação entre ${n1} e ${n2} foi igual a ${multiplica}`
}

function dividir() {
    let num = document.getElementById('num')
    let num2 = document.getElementById('num2')
    let resp = document.getElementById('resp')
    let n1 = Number(num.value)
    let n2 = Number(num2.value)
    let dividi = n1 / n2
    resp.innerHTML = `Sua divisão entre ${n1} e ${n2} ficou igual a ${dividi}`
}