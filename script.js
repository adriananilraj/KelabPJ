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


// Navbar Container 
var Navbar = document.getElementById('NavbarContainer');
var NavbarWeb = document.getElementById('navbarWeb');
var screenWidth = window.innerWidth;
window.addEventListener('resize', function() {
    
    if (screenWidth <= 770) {
        // NavbarWeb.remove();
        // Navbar.appendChild(element);
        // NavbarWeb.style.display = 'none';
        // Navbar.style.display = 'block';
        // console.log('Mobile');
    } else {
        // Navbar.remove()
        // NavbarWeb.appendChild(element);
        // NavbarWeb.style.display = 'block'
        // Navbar.style.display = 'none';
    }
});


(function() {
    // Handle If Load Responsive
    console.log('work')
    if (screenWidth <= 770) {
        
        // NavbarWeb.style.display = 'none';
        // Navbar.style.display = 'block';
    } else {
        Navbar.remove()
        // NavbarWeb.style.display = 'block'
        // Navbar.style.display = 'none';
    }
})();

