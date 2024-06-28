const inicializardesafio2 = () => {
  const formDados = document.getElementById("dados");
  formDados.addEventListener("submit", (event) => {
    event.preventDefault();
    validarDados();
  });
};

const validarDados = () => {
  const nome = document.getElementById("nome").value;
  const idade = document.getElementById("idade").value;
  const cor = document.getElementById("cor").value;

  if (nome === "" || idade === "" || cor === "") {
    alert("Por favor, preencha todos os campos");
    return;
  }
  imprimirDadosPessoais(nome, idade, cor);
  // Restante da lógica de validação, se necessário
};

const imprimirDadosPessoais = (nome, idade, cor) => {
  const paragrafoNome = document.getElementById("pNome");
  const paragrafoIdade = document.getElementById("pIdade");
  const paragrafoCor = document.getElementById("pCor");
  paragrafoNome.textContent = "O nome escolhido é " + nome;
  paragrafoIdade.textContent = "a idade é " + idade;
  paragrafoCor.textContent = "E sua cor preferida é: " + cor;
};
inicializardesafio2();
