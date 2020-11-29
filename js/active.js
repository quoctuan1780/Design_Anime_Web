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