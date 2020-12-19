var slider = document.querySelector('.scroll-horizontal');
let isDown = false;
let startX;
let scrollLeft;
slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
    isDown = false;
});

slider.addEventListener('mouseup', () => {
    for (let i = 0; i < document.getElementsByClassName('item-anime-link').length; i++) {
        document.getElementsByClassName('item-anime-link')[i].className = document.getElementsByClassName('item-anime-link')[i].className.replace(" remove-point-event", "");
    }
    isDown = false;
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    for (let i = 0; i < document.getElementsByClassName('item-anime-link').length; i++) {
        if (document.getElementsByClassName('item-anime-link')[i].className.search(' remove-point-event') === -1)
            document.getElementsByClassName('item-anime-link')[i].className += ' remove-point-event';
    }
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft,
        walk = (x - startX);
    slider.scrollLeft = scrollLeft - walk;
});