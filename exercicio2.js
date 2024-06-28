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
  const paragrafoMensagem = document.getElementById("erro2");
  if (nome === "" || idade === "" || cor === "") {
    paragrafoMensagem.textContent =
      "Por favor, preencha nome e idade e selecione uma cor";
    return;
  }
  paragrafoMensagem.textContent = "";
  imprimirDadosPessoais(nome, idade, cor);
  // Restante da lógica de validação, se necessário
};

const imprimirDadosPessoais = (nome, idade, cor) => {
  const paragrafoNome = document.getElementById("pNome");
  const paragrafoIdade = document.getElementById("pIdade");
  const paragrafoCor = document.getElementById("pCor");
  paragrafoNome.textContent = "O nome escolhido é " + nome;
  paragrafoIdade.textContent = "a idade é " + idade;
  paragrafoCor.textContent =
    "E sua cor preferida é: " +
    cor +
    ". Veja como a página ficou mais bonita! obrigada!";
  AlterarFundo(cor);
};
const AlterarFundo = (cor) => {
  const body = document.body;
  switch (cor.toLowerCase()) {
    case "vermelho":
      body.style.backgroundColor = "red";
      break;
    case "azul":
      body.style.backgroundColor = "blue";
      break;
    case "amarelo":
      body.style.backgroundColor = "yellow";
      break;
    case "roxo":
      body.style.backgroundColor = "purple";
      break;
    case "laranja":
      body.style.backgroundColor = "orange";
      break;
    case "verde":
      body.style.backgroundColor = "green";
      break;
    case "rosa":
      body.style.backgroundColor = "pink";
      break;
    case "preto":
      body.style.backgroundColor = "black";
      break;
    case "branco":
      body.style.backgroundColor = "white";
      break;
    case "marrom":
      body.style.backgroundColor = "brown";
      break;
    case "azul claro":
      body.style.backgroundColor = "lightblue";
      break;
    case "cinza":
      body.style.backgroundColor = "gray";
      break;
    default:
      body.style.backgroundColor = "white"; // Cor padrão caso nenhuma outra seja selecionada
      break;
  }
};

inicializardesafio2();
