let operacao = [];
let operacaoResultado = [];

//let operador = ['+', '-', '*', '/'];
let ultimoOperador;
//let operador1 = document.querySelector(".operador1").innerHTML;
//let operador2 = document.querySelector(".operador2").innerHTML;
//let operador3 = document.querySelector(".operador3").innerHTML;
//let operador4 = document.querySelector(".operador4").innerHTML;


function telaBaixo(entrada) { //entrada de dados

  let visor = document.getElementById("visor");

  // let entradaInvalida = /[+-\/*]/.test(entrada) && /[+-\/*]$/.test(visor.innerHTML);

  // if (entradaInvalida) {
  //   return;
 //  }

  let testEntrada = /[+-\/*]/.test(entrada) ? true : false; //testa se a entrada foi um operador 

  if (testEntrada) { // se a entrada foi um operador armazena essa entrada numa variavel

    ultimoOperador = entrada;
    alert('Usei um operador')

  } else if (entrada != ultimoOperador && testEntrada == true) {
    ultimoOperador = entrada;
    alert('Operador diferente')

  }

  visor.innerHTML = visor.innerHTML + entrada;

  console.log(testEntrada);
}


function telaCima(entrada) { //mostra a operação no visor de cima

  var entradaVisor = document.getElementById("visor").innerHTML;
  document.getElementById("visorCima").innerHTML = entradaVisor;

}

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
}

function calcular() { //calcula

  let visor = document.getElementById("visor").innerHTML;

  var resultado = eval(visor)

  operacao.push(visor)

  if (visor) {
    telaCima();
    document.getElementById('visor').innerHTML = resultado
    operacaoResultado.push(resultado)
    // historico();

    return;
  }

}

function historico() {
  for (let i = 0; i < operacao.length; i++) {

    // console.log(operacao[i]);
    // console.log(operacaoResultado[z]);
    console.log(`${operacao[i]} = ${operacaoResultado[i]}`)
  }

}
