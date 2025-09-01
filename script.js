function consultaCEP(event) {
    if (event) event.preventDefault();

    let cep = document.getElementById('cep').value;
    let url = 'https://viacep.com.br/ws/' + cep + '/json/';
    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('logradouro').value = data.logradouro;
            document.getElementById('bairro').value = data.bairro;
            document.getElementById('localidade').value = data.localidade;
            document.getElementById('uf').value = data.uf;

            localStorage.setItem('endereco', JSON.stringify(data));
        })
        .catch(error => console.error(error));
}

window.onload = () => {
    const endereco = localStorage.getItem('endereco');
    if (endereco) {
        const data = JSON.parse(endereco);
        document.getElementById('cep').value = data.cep;
        document.getElementById('logradouro').value = data.logradouro;
        document.getElementById('bairro').value = data.bairro;
        document.getElementById('localidade').value = data.localidade;
        document.getElementById('uf').value = data.uf;
    }
};
