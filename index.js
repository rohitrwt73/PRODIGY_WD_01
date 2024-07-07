 // Change navbar background color on scroll
 window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Change font color of menu items on hover
document.querySelectorAll('.nav-link').forEach(function(navLink) {
    navLink.addEventListener('mouseover', function() {
        this.style.color = 'yellow'; // Gold color
    });
    navLink.addEventListener('mouseout', function() {
        this.style.color = '#FFFFFF'; // Default color
    });
});