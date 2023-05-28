let btn = document.querySelector('#btn');

btn.addEventListener('toggole', () => {
    btn.innerText = "Thank you";
});

let button = document.getElementById('btn');

button.setAttribute("href", "www.codesplanner.com");
button.setAttribute("class", "hello_btn");




let heading = document.getElementById('heading');
let subheading = document.getElementById('sub-heading');
heading.addEventListener('click', () => {
    heading.innerText = "How are you?"
    subheading.remove();
})




