var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");

sideNav.style.right = '-250px';

menuBtn.onclick = function() {
    if (sideNav.style.right == '-250px') {
        sideNav.style.right = "0";
        menu.src = './img/close.svg'
    } else {
        sideNav.style.right = '-250px';
        menu.src = './img/list.svg'
    }
}

const currentYearElement = document.getElementById('thisYear');
const currentYear = new Date().getFullYear();
currentYearElement.textContent = currentYear;
