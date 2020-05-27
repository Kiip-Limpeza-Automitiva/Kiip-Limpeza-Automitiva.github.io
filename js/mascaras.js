function validarEntrada(caracter, tipoDeBloqueio) {

    var tipo = tipoDeBloqueio;

    // serve para padronizar a conversao em ascii em todas as versoes de navegadores
    if (window.event) {
        // Os que sao baseados em janela ou nao
        // charCode converte o caracter em ascii
        var asc = caracter.charCode;
    } else {
        // para navegadores antigos
        var asc = caracter.which;
    }


    if (tipo == "string") {
        if (asc < 48 || asc > 57) {
            return false;
        }
    } else if (tipo == "numeric") {
        if (asc >= 48 && asc <= 57) {
            return false;
        }
    }

}

function mascaraFone(objeto, event, tipoDeDados) {
    // alert(objeto);
    var tipo = tipoDeDados;

    if (validarEntrada(event, "string") == false) {
        // alert("VDD");
        return false;
    } else {
        var input = objeto.value;
        var id = objeto.id;
        var resultado = input;

        if(tipo == "telefone"){
            if (input.length == 0) {
                resultado = "(";
            } else if (input.length == 3) {
                resultado += ") ";
            } else if (input.length == 9) {
                resultado += "-";
            } else if (input.length == 14) {
                return false;
            }
            return document.getElementById(id).value = resultado;

        } else if(tipo == "celular"){
            if (input.length == 0) {
                resultado = "(";
            } else if (input.length == 3) {
                resultado += ") ";
            } else if (input.length == 10) {
                resultado += "-";
            } else if (input.length == 15) {
                return false;
            }
            return document.getElementById(id).value = resultado;
        }
    }

    // console.log(resultado);
}

function mascaraCep(objeto, event){

    if (validarEntrada(event, "string") == false) {
        return false;
    }else{
        var input = objeto.value;
        var id = objeto.id;
        var resultado = input;

        if(input.length == 2){
            resultado += ".";
        }else if(input.length == 6){
            resultado += "-";
        }else if(input.length == 10){
            return false;
        }
        return document.getElementById(id).value = resultado;
    }

}