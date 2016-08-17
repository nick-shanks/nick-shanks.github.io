document.addEventListener("DOMContentLoaded", highlightedMenu)

function highlightedMenu() {

    var input = document.getElementsByTagName('li');

    for (var i = 0; i < input.length; i++) {

        input[i].addEventListener('mouseenter', incoming);
        input[i].addEventListener('mouseleave', exit);
    }

    function incoming(evt) {
        evt.target.style.backgroundColor = 'white';
        evt.target.style.color = 'black';
    }

    function exit(evt) {
        evt.target.style.backgroundColor = 'black';
        evt.target.style.color = 'white';
    }

}
