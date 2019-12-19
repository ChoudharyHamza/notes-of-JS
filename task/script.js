
function whenClick(el) {
    el.textContent = 'you clicked!';
    var ar = document.querySelectorAll(".button");
    Array.from(ar);

    ar.forEach(element => {
        element.textContent = 'woohoo';
    });
}