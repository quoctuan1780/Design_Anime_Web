$("#search1").on('keyup', function(e) {
    if ($(this).val() === '')
        document.getElementById("result-search-1").className += 'display-none';
    else
    if (e.keyCode !== 8) {
        document.getElementById("result-search-1").className = document.getElementById("result-search-1").className.replace('display-none', '');
    }
});

$("#search2").on('keyup', function(e) {
    if ($(this).val() === '')
        document.getElementById("result-search-2").className += 'display-none';
    else
    if (e.keyCode !== 8) {
        document.getElementById("result-search-2").className = document.getElementById("result-search-2").className.replace('display-none', '');
    }
});