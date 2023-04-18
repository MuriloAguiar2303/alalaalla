function calcularAreaTriangulo(){
    var raio = parseFloat(document.getElementById("base").value);
    var area = (Math.PI*(raio*raio));

    document.getElementById("resultado").innerHTML = area;

    // if(base<=100){
    //     document.getElementById("resultado").innerHTML = ("Esse triangulo de área " +area+ " pertence ao grupo 1");
    // }
    // else if((base>100)&&(base<=400)){
    //     document.getElementById("resultado").innerHTML = ("Esse triangulo de área " +area+ " pertence ao grupo 2");
    // }
    // else if((base>400)&&(base<=600)){
    //     document.getElementById("resultado").innerHTML = ("Esse triangulo de área " +area+ " pertence ao grupo 3");
        
    // }
    // else if((base>600)&&(base<=1000)){
    //     document.getElementById("resultado").innerHTML = ("Esse triangulo de área " +area+ " pertence ao grupo 4");
    // }
    // else{
    //     document.getElementById("resultado").innerHTML = ("Esse triangulo de área " +area+ " pertence ao grupo 5")
    // }
}