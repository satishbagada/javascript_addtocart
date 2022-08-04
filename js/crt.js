function cart() {
    var q = document.getElementById('qty').value;
    var p = document.getElementById('pr').value;
    var t = q * p;

    document.getElementById('tot').innerHTML = t;
}

function p() {
    document.getElementById('pbtn').style.display = "none";
    window.print();

}

