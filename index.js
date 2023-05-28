let container = document.getElementsByClassName('container')[0]

let heading = document.createElement('h2');

heading.innerText = "Do you want to know our website URL?";




let button = document.createElement("button");
let button2 = document.createElement("button");
let text1 = "Yes"
let text2 = "No"

button.innerText = text1;
button2.innerText = text2;

function1 = () => {
    let url = document.URL;

    let text = document.createElement('p');
    text.innerText = url;
    container.appendChild(text)
}

button.addEventListener('click', function1)





// Append 
container.appendChild(heading)
container.appendChild(button)
container.appendChild(button2)
