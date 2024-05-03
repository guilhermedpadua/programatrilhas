function showNextForm(event) {
  if (verificarCamposVazios()) {
    document.getElementById("dados_pessoais").style.display = "none";
    document.getElementById("dados_academicos").style.display = "block";
    console.log('entrou')
    event.preventDefault();
  } 
}

function showDocumentForm(event)  {
  if (verificarCamposObrigatorios()) {
    document.getElementById("dados_academicos").style.display = "none";
    document.getElementById("documentos").style.display = "block";
    event.preventDefault();
    console.log('entrou')
  } 
}

function hideDocumentForm() {
  document.getElementById("dados_academicos").style.display = "none";
  document.getElementById("dados_pessoais").style.display = "block";
}

function showConfirmEnrollment() {
  resumoInscricao()
  document.getElementById("documentos").style.display = "none";
  document.getElementById("confirmar_inscricao").style.display = "block";
}
function hideConfirmEnrollment() {
  document.getElementById("documentos").style.display = "none";
  document.getElementById("dados_academicos").style.display = "block";
}

function showSucessEnrollment() {
  document.getElementById("confirmar_inscricao").style.display = "none";
  document.getElementById("sucesso_inscricao").style.display = "block";
}

function hideSucessEnrollment() {
  document.getElementById("confirmar_inscricao").style.display = "none";
  document.getElementById("documentos").style.display = "block";
}

function preencherResumo() {
  document.getElementById("nomeConfirmacao").textContent = document.getElementById("nome").value;
  document.getElementById("emailConfirmacao").textContent = document.getElementById("email").value;
  document.getElementById("telefoneConfirmacao").textContent = document.getElementById("telefone").value;
  document.getElementById("cpfConfirmacao").textContent = document.getElementById("cpf").value;
}

const tema = document.getElementById('icon');

tema.addEventListener('click', () => {
  const form = document.getElementById('container');

  if (tema.classList.contains('fa-moon')) {
    tema.classList.remove('fa-moon');
    tema.classList.add('fa-sun');

    form.classList.add('dark');
    return;
  }

  tema.classList.remove('fa-sun');
  tema.classList.add('fa-moon');

  form.classList.remove('dark');
});

function resumoInscricao() {
  var valorInputNome = document.getElementById("nome").value
  var nome = document.getElementById("nome_enviado");
  nome.textContent = valorInputNome;

  var valorInputEmail = document.getElementById("email").value
  var email = document.getElementById("email_enviado");
  email.textContent = valorInputEmail;

  var valorInputTelefone = document.getElementById("telefone").value
  var telefone = document.getElementById("telefone_enviado");
  telefone.textContent = valorInputTelefone;

  var valorInputIdade = document.getElementById("idade").value
  var idade = document.getElementById("idade_enviado");
  idade.textContent = valorInputIdade;

  var valorInputGenero = document.getElementById("genero").value
  var genero = document.getElementById("genero_enviado");
  genero.textContent = valorInputGenero;

  var valorInputCidade = document.getElementById("cidade").value
  var cidade = document.getElementById("cidade_enviado");
  cidade.textContent = valorInputCidade;

  var valorInputEstado = document.getElementById("estado").value
  var estado = document.getElementById("estado_enviado");
  estado.textContent = valorInputEstado;

  var valorInputRua = document.getElementById("rua").value
  var rua = document.getElementById("rua_enviado");
  rua.textContent = valorInputRua;
  
  var valorInputNumero = document.getElementById("numero").value
  var numero = document.getElementById("numero_enviado");
  numero.textContent = valorInputNumero;

  var valorInputEscolaridade = document.getElementById("escolaridade").value
  var escolaridade = document.getElementById("escolaridade_enviado");
  escolaridade.textContent = valorInputEscolaridade;

  var valorInputInstituicao = document.getElementById("instituicao").value
  var instituicao = document.getElementById("instituicao_enviado");
  instituicao.textContent = valorInputInstituicao;
}

function verificarCamposVazios() {
  const inputs = document.getElementById("form1").elements;

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value === '') { 
       return false;
    }
  }
  return true;
}

function verificarCamposObrigatorios() {
  const inputs = document.getElementById("form2").querySelectorAll('[required]');
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.value === '') { 
       return false;
    }
  }
  return true;
}
