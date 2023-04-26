function imprimir(frase){
    document.write("<big>")
    document.write(frase)
    document.write("</big>")
}

function saltoDeLinea(){
    document.write("<br>")
    document.write("<br>")
    document.write("<br>")
    document.write("<hr>")
    document.write("<br>")
    document.write("<br>")
}

let hermano = 23
let yo = 19

let difEdad = hermano - yo

imprimir("hola amigo") 
saltoDeLinea()
imprimir("como estas")
imprimir("la diferencia de edad de mi hermano con la mia es de " + difEdad )
saltoDeLinea()
imprimir("sexo")


let pesoMassa = 63
let alturaMassa = 1.83

let imcMassa = pesoMassa / (alturaMassa * alturaMassa)

imprimir("el IMC de massa es de " + imcMassa)

function imc(){
    pesoPersona1 = parseInt(prompt("ingrese el peso de la persona 1"))
    pesoPersona2 = parseInt(prompt("ingrese el peso de persona 2"))
    
    alturaPersona1 = parseInt(prompt("ingrese la altura de la persona 1"))
    alturaPersona2 = parseInt(prompt("ingrese la altura de la persona 2"))
    
    imcPerso1 = pesoPersona1 / (alturaPersona1 * alturaPersona1)
    imcPerso2 = pesoPersona2 / (alturaPersona2* alturaPersona2)

    promImc= (imcPerso1 + imcPerso2) / 2

    imprimir("El promedio de imc es de "+ promImc)
}