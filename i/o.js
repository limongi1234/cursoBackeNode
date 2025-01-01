const rl = require('readline');

const prompt = rl.createInterface({
    input:process.stdin,
    outt:process.stdout
})

const prompt = require('prompt'); // Certifique-se de usar a biblioteca 'prompt'

prompt.question('Qual seu número favorito?'), (resposta) => {
    // Calculando o dobro e exibindo o resultado
    console.log(`O Dobro do seu número favorito é: ${parseInt(resposta) * 2}`);
    prompt.close(); // Fecha o prompt após a resposta
};
