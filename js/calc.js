function insert(num) { //entrada de dados

    let visor = document.getElementById("visor");

    let entradaInvalida = /[+-\/*]/.test(num) && /[+-\/*]$/.test(visor.innerHTML);

    if (entradaInvalida) {
      return;
    }

    visor.innerHTML = visor.innerHTML + num;
  }

  function insertTop(num) { //mostra a operação no visor de cima
      
    let entradaInvalida = /[+-\/*]/.test(num) && /[+-\/*]$/.test(visor.innerHTML);
    if (entradaInvalida) {
      return;
    }
      
    var numVisor = document.getElementById("visor").innerHTML;
    var numero = document.getElementById("visorCima").innerHTML;
    document.getElementById("visorCima").innerHTML = numero + numVisor;
    apagarVisor();
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
    let visorCima = document.getElementById('visorCima').innerHTML;
    var resultado = eval(visorCima+visor)

    if (visor) {
        insertTop();
        document.getElementById('visorCima').innerHTML = resultado
      return;
    }

    document.getElementById("visor").innerHTML = "0";
  }