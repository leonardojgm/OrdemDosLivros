function saudacaoGenerica() {
    console.log('Bom dia');
    console.log('Bom tarde')
    console.log('Bom noite');
}

saudacaoGenerica();

function saudacao(nome = "Meu querido!", titulo = "Sr(a)") {
    console.log('Bom dia', titulo, nome);
    console.log('Bom tarde', titulo, nome)
    console.log('Bom noite', titulo, nome);
}

saudacao("Ana Rita");
saudacao("Guilherme", "Dr.");
saudacao("Rebeca");
saudacao();