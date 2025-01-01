const rl = require('readline');

const prompt = rl.createInterface({
    input:process.stdin,
    output:process.stdout
})

prompt.question('Qual seu número favorito?'),(resposta) => {
    console.log(`O dobro do seu número favorito é: ${parseInt(resposta) * 2}`)
    prompt.close();
}