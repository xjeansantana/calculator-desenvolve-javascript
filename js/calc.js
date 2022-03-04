let operacao = [];
let operacaoResultado = [];

function telaBaixo(entrada) { //entrada de dados
  let visor = document.getElementById("visor");
  let entradaVisor = document.getElementById("visor").innerHTML;
  let ultimaEntrada = entradaVisor.substring(entradaVisor.length - 1, entradaVisor.length)

    if (isOperator(ultimaEntrada) && isOperator(entrada)) {
      apagar();
    }
     visor.innerHTML = visor.innerHTML + entrada;
    }

function isOperator(entrada) {
  return /[+-\/*]/.test(entrada) ? true : false;
}


function telaCima(entrada) { //mostra a operação no visor de cima
  var entradaVisor = document.getElementById("visor").innerHTML;
    document.getElementById("visorCima").innerHTML = entradaVisor;
}

//Funções apagar
function clean() { //limpa todos os campos
  apagarVisor();
    document.getElementById("visorCima").innerHTML = "";
}
  function apagarVisor() { //limpa tudo do visor de baixo que recebe a entrada
    document.getElementById("visor").innerHTML = "";
  }
    function apagar() { //limpa a ultima entrada
      let visor = document.getElementById("visor").innerHTML;
       document.getElementById("visor").innerHTML = visor.substring(0, visor.length - 1);
} //termino funcões apagar


// funcão calcular
function calcular() { //calcula
  let visor = document.getElementById("visor").innerHTML;
    var resultado = eval(visor)
     operacao.push(visor)

      if (visor) {
        telaCima();
        document.getElementById('visor').innerHTML = resultado
        operacaoResultado.push(resultado)
        historico();
        return;
      }

} //fim da função calcular

//historico 
function historico() {
  for (let i = 0; i < operacao.length; i++) {
    console.log(`${operacao[i]} = ${operacaoResultado[i]}`)
  }
}
