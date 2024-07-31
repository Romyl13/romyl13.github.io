let btn = document.querySelector("#btn");
let menu = document.querySelector(".menu");
let searchBtn = document.querySelector(".bx-search");

btn.onclick = function() {
    menu.classList.toggle("active");
}
searchBtn.onclick = function() {
    menu.classList.toggle("active");
}






const logOutButton = document.getElementById('log_out');
const contactMenu = document.querySelector('.contact__menu');
const contactButtonExit = document.querySelector('.contact__button-exit');

// Функція для перемикання стану меню
const toggleMenu = () => {
    contactMenu.classList.toggle('active');
};

// Функція для закриття меню
const closeMenu = () => {
    contactMenu.classList.remove('active');
};

// Обробка кліку на кнопку "Вийти"
logOutButton.addEventListener('click', toggleMenu);

// Обробка кліку на кнопку виходу з меню
if (contactButtonExit) {
    contactButtonExit.addEventListener('click', closeMenu);
}

// Обробка кліку поза межами меню
document.addEventListener('click', (event) => {
    // Перевіряємо, чи меню активне
    if (contactMenu.classList.contains('active')) {
        // Перевіряємо, чи клік відбувся не всередині меню і не на кнопці "Вийти"
        if (!contactMenu.contains(event.target) && !logOutButton.contains(event.target)) {
            closeMenu();
        }
    }
});

// Запобігаємо закриттю меню при кліку всередині меню
contactMenu.addEventListener('click', (event) => {
    event.stopPropagation();
});












document.querySelectorAll('.aboutMe__skill-one, .aboutMe__skill-two, .aboutMe__skill-three').forEach((block) => {
    block.addEventListener('mousemove', (e) => {
        const rect = block.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const midX = rect.width / 2;
        const midY = rect.height / 2;
        const angleX = (y - midY) / 10;
        const angleY = (x - midX) / 10;

        block.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });

    block.addEventListener('mouseleave', () => {
        block.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});
