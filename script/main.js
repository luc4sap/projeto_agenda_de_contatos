const form = document.getElementById('form-agenda');
const inputNumeroContato = document.getElementById('numero-telefone');

const contato = [];
const numero = [];

let linhas = '';

form.addEventListener('submit' , function(e) {
    e.preventDefault();

    adicionarLinha();
    atualizarTabela();
})

function adicionarLinha() {
    const inputNomeContato = document.getElementById('nome-contato');

    if (contato.includes(inputNomeContato.value)){
        alert(`Contato: ${inputNomeContato.value} já adicionado`)
    } else {
        contato.push(inputNomeContato.value);
        numero.push(inputNumeroContato.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroContato.value}</td>`;
        linha += `</tr>`;

        linhas += linha
    }

    inputNomeContato.value = '';
    inputNumeroContato.value = '';
}

function atualizarTabela(){
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}

inputNumeroContato.addEventListener('keypress', (a) => {
    let mascara = a.target.value;

    mascara = mascara.replace(/\D/g, "");
    mascara = mascara.replace(/^(\d{2})(\d)/g,"($1) $2");
    mascara = mascara.replace(/(\d{5})(\d{4})$/,"$1-$2");

    inputNumeroContato.value = mascara;
})