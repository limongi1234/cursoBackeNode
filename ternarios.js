const idade = 19;
const temCNH = true;
let numeroDePassageiros = 4;
const podeDirigir = idade > 18 && temCNH;

if (podeDirigir) 
    console.log('Pessoa está habilitada para conduzir veículo');
else
    console.log('Pessoa não está habilitada para conduzir veículo');

console.log({numeroDePassageiros});

numeroDePassageiros = podeDirigir ? 4 : 0;
