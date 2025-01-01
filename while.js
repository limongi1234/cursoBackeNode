const nomesDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca'];

console.log('Olá', nomesDeUsuarios[0]);
console.log('Olá', nomesDeUsuarios[1]);
console.log('Olá', nomesDeUsuarios[2]);
console.log('Olá', nomesDeUsuarios[3]);

let indiceDoUsuario = 0;
let indiceAtual = 4;

while (indiceDoUsuario < indiceAtual) {
    console.log('Olá', nomesDeUsuarios[indiceDoUsuario]);
    indiceDoUsuario = indiceDoUsuario + 1;
}