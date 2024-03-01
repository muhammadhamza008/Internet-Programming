function displayMsg () {
    var element1 = document.getElementById("content");
    var element2 = document.getElementById("mydiv");
    element2.firstChild.nodeValue = element1.value;
    // alert(element.value);
}

function myLoadFunction () {
    var element = document.getElementById("content");
    // element.addEventListener('click', displayMsg);
    element.addEventListener('keyup', displayMsg);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);