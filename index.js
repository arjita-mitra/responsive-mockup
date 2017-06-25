var modal = document.getElementById('responsiveModal');
var btn = document.getElementById("modalBox");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
window.onkeydown = function(event) {
    if ( event.keyCode == 27) {
        modal.style.display = "none";
    }
}