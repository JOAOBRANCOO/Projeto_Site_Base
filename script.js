function verifica(verificado) {
    let emailField = document.getElementById('email');
    let senhaField = document.getElementById('senha');
    let confirmSenhaField = document.getElementById('confirm_senha');
    let isValid = true;

    // Regex para validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificação do campo de email
    if (!emailRegex.test(emailField.value)) {
        emailField.classList.add('img-registro-errado');
        emailField.classList.remove('img-registro-certo');
        isValid = false;
    } else {
        emailField.classList.remove('img-registro-errado');
        emailField.classList.add('img-registro-certo');
    }

    // Verificação do campo de senha
    if (senhaField.value === '') {
        senhaField.classList.add('img-registro-errado');
        senhaField.classList.remove('img-registro-certo');
        isValid = false;
    } else {
        senhaField.classList.remove('img-registro-errado');
        senhaField.classList.add('img-registro-certo');
    }

    // Verificação do campo de confirmação de senha
    if (confirmSenhaField.value === '') {
        confirmSenhaField.classList.add('img-registro-errado');
        confirmSenhaField.classList.remove('img-registro-certo');
        isValid = false;
    } else {
        confirmSenhaField.classList.remove('img-registro-errado');
        confirmSenhaField.classList.add('img-registro-certo');
    }

    // Verificação se a senha e a confirmação de senha são iguais
    if (senhaField.value !== confirmSenhaField.value) {
        senhaField.classList.add('img-registro-errado');
        confirmSenhaField.classList.add('img-registro-errado');
        senhaField.classList.remove('img-registro-certo');
        confirmSenhaField.classList.remove('img-registro-certo');
        isValid = false;
    }

    if (!isValid) {
        verificado.preventDefault(); // Impede o envio do formulário se houver campos inválidos
    } else {
        adicionarRegistro(emailField.value, senhaField.value);
    }
}

function adicionarRegistro(email, senha) {
    let registrosDiv = document.getElementById('registros');
    let tabela = document.getElementById('tabela-registros').getElementsByTagName('tbody')[0];
    let novaLinha = tabela.insertRow();

    let colunaEmail = novaLinha.insertCell(0);
    let colunaSenha = novaLinha.insertCell(1);

    colunaEmail.textContent = email;
    colunaSenha.textContent = senha;

    // Exibir a tabela de registros
    registrosDiv.style.display = 'block';

    // Limpa os campos após adicionar o registro
    document.getElementById('form').reset();
}

function limparCampos() {
    document.getElementById('form').reset();

    // Remover as classes de erro/correção dos campos
    let campos = document.querySelectorAll('#form input');
    campos.forEach(campo => {
        campo.classList.remove('img-registro-errado');
        campo.classList.remove('img-registro-certo');
    });
}
