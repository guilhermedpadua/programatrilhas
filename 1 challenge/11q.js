// Crie uma lógica para calcular a idade de uma pessoa. Essa lógica deverá receber um valor de ano de nascimento no formato “yyyy-MM-dd” e deverá retornar o número da idade da pessoa como resultado.

function calcularIdade(dataNascimento) {
    const dataNascimentoSplit = dataNascimento.split('-');
    const anoNascimento = parseInt(dataNascimentoSplit[0]);
    const mesNascimento = parseInt(dataNascimentoSplit[1]) - 1; // Os meses em JavaScript começam do 0 (janeiro = 0)
    const diaNascimento = parseInt(dataNascimentoSplit[2]);

    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();

    let idade = anoAtual - anoNascimento;

    // Verifica se o aniversário já passou este ano
    if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
    }

    return idade;
}

const dataNascimento = '1990-04-05';
const idade = calcularIdade(dataNascimento);

console.log("A idade da pessoa é:", idade);
