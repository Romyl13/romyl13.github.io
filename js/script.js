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
        const midX = rect.width / 3;
        const midY = rect.height / 3;
        const angleX = (y - midY) / 30;
        const angleY = (x - midX) / 30;

        block.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
    });

    block.addEventListener('mouseleave', () => {
        block.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});







document.querySelectorAll('.skill__wrapper ul li').forEach(item => {
    item.addEventListener('mousemove', (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 100;
        const y = e.clientY - rect.top - rect.height / 100;

        item.style.transform = `rotateY(${x / 10}deg) rotateX(${-y / 10}deg)`;
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = `rotateY(0deg) rotateX(0deg)`;
    });
});












document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Запобігаємо стандартній поведінці форми

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('text').value;

    let botToken = '7484067404:AAEJTzzx0CMZ_loZLyTh7P3z3INEeFm8OBo'; // Токен вашого бота
    let chatId = '-1002146041470'; // Ваш Chat ID
    let telegramMessage = `Ім'я: ${name}\nEmail: ${email}\nПовідомлення:\n${message}`;

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(telegramMessage)}`;

    fetch(url, { method: 'POST' })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Повідомлення відправлено у Telegram!');
            } else {
                alert('Помилка при відправці повідомлення: ' + data.description);
            }
        })
        .catch(error => alert('Помилка: ' + error));
});