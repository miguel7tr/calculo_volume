// variáveis e addeventlistener

let respostaesfera = document.getElementById("respostaesfera")
let calcularesfera = document.getElementById("calcularesfera")

calcularesfera.addEventListener("click", ()=>{

let raioesfera = Number(document.getElementById("raioesfera").value)    
let volumeesfera = 0

const esferaa = new Esferav(raioesfera, volumeesfera)

let resultadoEsfera = esferaa.calcularvolumeEsfera()
respostaesfera.innerHTML += (resultadoEsfera)
})

let respostapiramide = document.getElementById("respostapiramide")
let calcularpiramide = document.getElementById("calcularpiramide")

calcularpiramide.addEventListener("click", ()=>{

let areabasepiramide = Number(document.getElementById("raioesfera").value)    
let alturapiramide = Number(document.getElementById("raioesfera").value)    
let volumepiramide = 0

const piramidee = new Piramidev(areabasepiramide, alturapiramide, volumepiramide)

let resultadoPiramide = piramidee.calcularvolumePiramide()
respostapiramide.innerHTML += (resultadoPiramide)
})