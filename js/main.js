let h3 = document.querySelector('h3');
let gradient0 = document.querySelector('#gradient0');
let gradient1 = document.querySelector('#gradient1');
let background = document.querySelector('body');
const direction = document.querySelector('select');
const random = document.querySelector('#random');

const setBackground = () => {
    background.style.background = `linear-gradient(${direction.value}, ${gradient0.value}, ${gradient1.value})`;
    h3.textContent = background.style.background + ';';
}

const randomColor = () => {
    let letters = '0123456789ABCDEF';
    var color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

setBackground();
gradient0.addEventListener('input', setBackground);
gradient1.addEventListener('input', setBackground);

direction.addEventListener('input', () => {
    console.log(direction.value);
    setBackground();
})

random.addEventListener('click', () => {
    //Generte two random colors
    gradient0.value = randomColor();
    gradient1.value = randomColor();

    //Set the colors
    setBackground();
});