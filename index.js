var container = document.getElementsByClassName('container')[0];
var heading = document.getElementsByTagName('h1')[0];
var button = document.getElementsByTagName('button')[0];



button.setAttribute("onclick", "myStyle();")

function myStyle() {
    container.style.backgroundColor = "white";
    container.style.color = "black";
    heading.style.textAlign = "left"
}