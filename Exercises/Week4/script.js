function print5 () {
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
}

print5();
print5();

function updateHeadingFunction () {
    var element = document.getElementById("page-heading");
    element.firstChild.nodeValue = "New Heading";
}

function oldHeadingFunction () {
    var element = document.getElementById("page-heading");
    element.firstChild.nodeValue = "Page Heading";
}

function updateParaFunction () {
    var element = document.getElementById("page-content");
    element.firstChild.nodeValue = "New Content";
}

function oldParaFunction () {
    var element = document.getElementById("page-content");
    element.firstChild.nodeValue = "Page Content";
}

function myLoadFunction () {
    var element = document.getElementById("page-heading");
    element.addEventListener('click', updateHeadingFunction);
    // element.addEventListener('mouseenter', updateHeadingFunction);
    // element.addEventListener('mouseleave', oldHeadingFunction);

    var element = document.getElementById("page-content");
    element.addEventListener('click', updateParaFunction);
    // element.addEventListener('mouseenter', updateParaFunction);
    // element.addEventListener('mouseleave', oldParaFunction);
}

document.addEventListener('DOMContentLoaded', myLoadFunction);