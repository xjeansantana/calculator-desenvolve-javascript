let operacao = [];
let operacaoResultado = [];

function telaBaixo(entrada) { //entrada de dados

  let visor = document.getElementById("visor");

  let testEntrada = /[+-\/*]/.test(entrada) ? true : false; //testa se a entrada foi um operador 

  let entradaOperador = false;

  if (testEntrada) { // se a entrada foi um operador entradaOperador == true
    entradaOperador = true;
    apagar();
    alert('Usei um operador')

  } else if (testEntrada == false) { //se foi um numero  entradaOperador == false
    entradaOperador = false;
    alert('Usei numero')

  } else if (entradaOperador && testEntrada) { // se foi um operador e a entrada operador for true apagar o ultimo digito
    apagar();
    entradaOperador = true;
    alert('apaguei')
  }

  visor.innerHTML = visor.innerHTML + entrada;

  console.log(testEntrada, entradaOperador);
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
    return;
  }

}

function historico() {
  for (let i = 0; i < operacao.length; i++) {
    console.log(`${operacao[i]} = ${operacaoResultado[i]}`)
  }

}
