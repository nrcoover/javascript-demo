window.onscroll = function() {
    makeSticky();
}

var navigation = document.getElementsByClass("sticky-nav");

var sticky = navigation.offsetTop;

function makeSticky() {
    if (window.pageYOffset > sticky) {
        navigation.classList.add("sticky");
    } else {
        navigation.classList.remove("sticky");
    }
}