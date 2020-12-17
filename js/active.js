//Set color active for link tag a
function active(id, curr) {
    var header = document.getElementById(id);
    var btns = header.getElementsByTagName("a");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("actives");
            current[curr].className = current[curr].className.replace("actives", "");
            this.className += "actives";
        });
    }
}

function active_info(id, curr) {
    var header = document.getElementById(id);
    var btns = header.getElementsByTagName("a");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("actives");
            if (current[curr] !== this.id) {
                document.getElementsByClassName("info")[current[curr].id].className += ' display-none';
                document.getElementsByClassName("info")[this.id].className = document.getElementsByClassName("info")[this.id].className.replace('display-none', '');
            }
            current[curr].className = current[curr].className.replace("actives", "");
            this.className += "actives";
        });
    }
}