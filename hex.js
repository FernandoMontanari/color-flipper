const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// Escutador de evento pega o click no botão.
// é realizado um for() para que os 6 caracteres que compõem
// o hexadecimal sejam gerados aleatóriamente pela função getRandomNumber()

btn.addEventListener('click', function() {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()]
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
})

// função para pegar um número aleatório com Math.random() 
// o número aleatório é definido pelo tamanho da array hex
// o resultado do cálculo Math.random() * hex.length
// é arredondado por Math.floor() para obter um número inteiro.

function getRandomNumber() {
    return Math.floor(Math.random() * hex.length);
}