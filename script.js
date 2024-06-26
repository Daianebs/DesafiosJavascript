document.addEventListener("DOMContentLoaded", (event) => {
    const formNumeros = document.getElementById("conta");
    const entradaNumeroA = document.getElementById("inputNumeroA");
    const entradaNumeroB = document.getElementById("inputNumeroB");
    const paragrafoMensagem = document.getElementById("mensagem");
    const paragrafoSoma = document.getElementById("soma");
    const paragrafoSubtracao = document.getElementById("subtracao");
    const paragrafoMultiplicacao = document.getElementById("multiplicacao");
    const paragrafoDivisaoA = document.getElementById("divisaoA");
    const paragrafoDivisaoB = document.getElementById("divisaoB");

    const inicializarApp = () => {
      formNumeros.addEventListener("submit", (event) => {
        event.preventDefault();
        paragrafoMensagem.textContent = "";
        validarNumeros();
      });
    };
  
    const validarNumeros = () => {
      const NumeroA = entradaNumeroA.value.trim();
      const NumeroB = entradaNumeroB.value.trim();
      if (NumeroA === "" || NumeroB === "") {
        paragrafoMensagem.textContent =
          "Por favor, preencha ambos os campos de entrada com números";
          limparParagrafos();
        return;
      }
      contas(parseFloat(NumeroA), parseFloat(NumeroB));
    };
  
    const limparParagrafos = () => {
      paragrafoSoma.textContent = "";
      paragrafoSubtracao.textContent = "";
      paragrafoMultiplicacao.textContent = "";
      paragrafoDivisaoA.textContent ="";
      paragrafoDivisaoB.textContent = "";
    }

    const contas = (a, b) => {
      paragrafoSoma.textContent = `Soma = ${somar(a, b)}`;
      paragrafoSubtracao.textContent = `Subtração = ${subtrair(a, b)}`;
      paragrafoMultiplicacao.textContent = `Multiplicação = ${multiplicar(a, b)}`;
      paragrafoDivisaoA.textContent = `Divisão de ${a} por ${b} = ${dividir(a, b)}`;
      paragrafoDivisaoB.textContent = `Divisão de ${b} por ${a} = ${dividir(b, a)}`;
    };
  
    const somar = (a, b) => {
      return a + b;
    };

    const subtrair = (a,b) =>{
      return a - b;
    }

    const multiplicar = (a,b) =>{
      return a * b;
    }
    
    const dividir = (a,b) =>{
      return a / b;
    }   
   
    inicializarApp();
  });
  