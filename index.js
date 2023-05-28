let btn = document.getElementsByTagName('button')[0];
let container = document.getElementsByClassName('container')[0];


btn.addEventListener('click', () => {
    let inputValue = document.getElementById('name');
    let showValue = inputValue.value;
    let text = document.createElement('p');
    text.innerText = showValue;

    container.appendChild(text);
})