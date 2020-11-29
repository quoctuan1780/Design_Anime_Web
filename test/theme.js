// Pegue o documento e ative a função
$(document).ready(function() {

    // Quando a classe menu toggle for clicada
    $('.menu-toggle').click(function() {

        // Adicione ao nav a classe .active
        $('nav').toggleClass('active');
    })

    var menu = document.getElementsByClassName('sub-menu');
    for (let i = 0; i < menu.length; i++) {
        menu[i].addEventListener('click', function() {
            if (menu[i].className === 'sub-menu') {
                menu[i].className += ' active';

            } else {
                menu[i].className = 'sub-menu';
            }
        });
    }
});