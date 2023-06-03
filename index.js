var image = document.getElementsByTagName("img")[0];
var btn1 = document.getElementsByTagName("button")[0];
var btn2 = document.getElementsByTagName("button")[1];

btn1.setAttribute("onclick", "previus()")

btn2.setAttribute("onclick", "next()")

function previus() {
    image.src = "./img/SliderImage (2).jpg";
}
function next() {
    image.src = "./img/SliderImage (4).jpg";
}