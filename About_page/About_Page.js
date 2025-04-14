lucide.createIcons();

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
let isMenuOpen = false;

mobileMenuBtn.addEventListener('click', () => {
    isMenuOpen = !isMenuOpen;
    mobileMenu.style.display = isMenuOpen ? 'flex' : 'none';
    mobileMenu.setAttribute('aria-expanded', isMenuOpen.toString());

    
    const icon = mobileMenuBtn.querySelector('i');
    icon.setAttribute('data-lucide', isMenuOpen ? 'x' : 'menu');
    lucide.createIcons();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });

            if (isMenuOpen) {
                isMenuOpen = false;
                mobileMenu.style.display = 'none';
                mobileMenu.setAttribute('aria-expanded', 'false');
                const icon = mobileMenuBtn.querySelector('i');
                icon.setAttribute('data-lucide', 'menu');
                lucide.createIcons();
            }
        }
    });
});


const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transition = 'opacity 0.5s ease-in-out';
    observer.observe(section);
});

function goto(page, scroll) {
    window.location.href = `${page}#${scroll}`;
  }
document.getElementById("recomendedProperty").addEventListener("click", function () {
      
    goto("../index.html", "recomended-properties_in_another_page");
});
document.getElementById("LuxuryHouses").addEventListener("click", function () {
      
    goto("../index.html", "Luxury_houses_in_another_page");
});
document.getElementById("AffordableHouses").addEventListener("click", function () {
      
    goto("../index.html", "Affordable_Houses_in other_page");
});
document.getElementById("BudgetFriendlyHouses").addEventListener("click", function () {
      
    goto("../index.html", "Budget_friendly_Houses_in other_page");
});