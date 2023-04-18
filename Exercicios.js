// alert("Bom dia, Mundo")
function cubo(){
    var cubo = parseFloat(document.getElementById("aoCubo").value);
    var resultado9 = Math.pow (cubo, 3);
    document.getElementById("resultado2").innerHTML = ("O numero "+cubo+" ao cubo ficaria: "+resultado9.toFixed(2));
}
function graus(){
    var tempA = parseFloat(document.getElementById("temperaturaConver").value);
    var resultado10 = ((tempA - 32) * 5/9);
    document.getElementById("resultado3").innerHTML = (tempA+" graus Fahrenheit para Celsius seria: " +Math.round(resultado10)+"º");
}
function triangulo(){
    var base = parseFloat(document.getElementById("baseTriangulo").value);
    var altura = parseFloat(document.getElementById("alturaTriangulo").value);
    var resultado11 = (base * altura)/2;    
    document.getElementById("resultado4").innerHTML = ("A base do triangulo é: "+resultado11);
}
function circulo(){
    var raio = parseFloat(document.getElementById("raioDoCirculo").value)
    var resultado12 = (Math.PI * (raio * raio))
    var resultado13 = 2 * Math.PI * raio
    document.getElementById("resultado5").innerHTML = ("A área é igual a: " +  resultado12.toFixed(2) + " e o perimetro é igual a: " +  resultado13.toFixed(2))
}
function desconto(){
    var valor = parseFloat(document.getElementById("valor").value)
    var resultado14 = (valor / 100) * 5
    document.getElementById("resultado6").innerHTML = ("O valor do desconto é de: " + resultado14.toFixed(2))
}
function data(){

}
function carro(){
    var dinheiro = parseFloat(document.getElementById("gasolina").value)
    var gasolina = dinheiro/5 
    var km = gasolina*20
   if(gasolina==1){
    document.getElementById("resultado8").innerHTML = ("Com "+dinheiro+" reais você pode colocar "+gasolina+" litro de gasolina "+km+"KM")
   }
   else{
    document.getElementById("resultado8").innerHTML = ("Com "+dinheiro+" reais você pode colocar "+gasolina+" litros de gasolina "+km+"KM")
   }
}
function data(){
    document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var dataNascimento = new Date(document.getElementById("data2").value);
    var idade = (new Date().getTime() - dataNascimento.getTime()) / (1000 * 60 * 60 * 24 * 365.25); 
     if (idade >= 18) {
       document.getElementById("resultado7").innerHTML = ("Você é maior de idade!");
    }
    else if (idade<0){
        document.getElementById("resultado7").innerHTML = ("Você não nasceu");
    }
     else {
        document.getElementById("resultado7").innerHTML = ("Você é menor de idade!");
        }

      });
      
}

