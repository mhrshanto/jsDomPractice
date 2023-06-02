var link = document.getElementById('link');
var container = document.getElementsByClassName('container')[0];


console.log(link);

link.innerHTML = "Click Me"
link.href = "https://codesplanner.com/"
link.id = "ourid"


link.style.fontSize = "50px"

link.setAttribute("class", "myClass")
link.setAttribute('target', '_blank')


var Elem = document.createElement('h1');
container.appendChild(Elem);

console.log(Elem)

Elem.innerHTML = "Hello Programmers!"


