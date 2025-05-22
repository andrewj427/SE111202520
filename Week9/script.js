// window.onload = function(){
// console.log(window);

// var p = document.querySelector("p");

// var textnode = document.createTextNode("wouldn't you like to be a pepper too?");

// p.append(textnode);

// p.innerHTML = textnode.textContent;
// };

document.addEventListener("DOMContentLoaded", function(){
    loadCode();
});

function loadCode() {
    codeForDomLab()
};
function codeForDomLab(){
     window.onload = function () {
        console.log(window);

        var p = document.querySelector("p");

        var textnode = document.createTextNode("wouldn't you like to be a pepper too?");

        p.append(textnode);

        p.innerHTML = textnode.textContent;
    };
}