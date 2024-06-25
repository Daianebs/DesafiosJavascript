document.addEventListener("DOMContentLoaded", (event) => {
    const formNumeros = document.getElementById("conta");
    const entradaNumeroA = document.getElementById("inputNumeroA");
    const entradaNumeroB = document.getElementById("inputNumeroB");
    const paragrafoMensagem = document.getElementById("mensagem");
    const paragrafoSoma = document.getElementById("soma");
  
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
        return;
      }
      contas(parseFloat(NumeroA), parseFloat(NumeroB));
    };
  
    const contas = (a, b) => {
      paragrafoSoma.textContent = `Soma = ${somar(a, b)}`;
    };
  
    const somar = (a, b) => {
      return a + b;
    };
    
    inicializarApp();
  });
  