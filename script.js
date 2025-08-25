//conectar com API

fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    //FRONT END
    document.getElementById('imagem').innerHTML = corpo.image
    document.getElementById('nome').innerHTML = corpo.name
    document.getElementById('disco').innerHTML = corpo.album
    document.getElementById('estilo').innerHTML = corpo.style
    document.getElementById('preco').innerHTML = corpo.price
})
fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem1').innerHTML = corpo.image1
    document.getElementById('nome1').innerHTML = corpo.name1
    document.getElementById('disco1').innerHTML = corpo.album1
    document.getElementById('estilo1').innerHTML = corpo.style1
    document.getElementById('preco1').innerHTML = corpo.price1
})

fetch('dados.json').then(resposta => resposta.json()).then(corpo =>{
    console.log(corpo)

    document.getElementById('imagem2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = corpo.name2
    document.getElementById('disco2').innerHTML = corpo.album2
    document.getElementById('estilo2').innerHTML = corpo.style2
    document.getElementById('preco2').innerHTML = corpo.price2
})

function click0() {
    alert("Comprado")
}
function click1() {
    alert("Comprado")
}
function click2() {
    alert("Comprado")
}