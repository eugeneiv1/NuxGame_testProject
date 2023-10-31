const burger = document.querySelector('.js-burger');
const titles = Array.from(document.querySelectorAll('.js-faq-questions-list-item-title'));
const languages = Array.from(document.querySelectorAll('.js-language-sublist-link'));

if (burger) {
    const headerNavList = document.querySelector('.js-header-nav-list');

    burger.addEventListener('click', (e) => {
        burger.classList.toggle('active')
        headerNavList.classList.toggle('active');
    })
}

if (titles) {
    const items = Array.from(document.querySelectorAll('.js-faq-questions-list-item'));

    titles.forEach( item => item.addEventListener('click', (e) => {
        const targetParent = e.target.closest('.js-faq-questions-list-item');

        targetParent.classList.toggle('closed');
        items.forEach( item => {
            if (item !== targetParent) {
                item.classList.add('closed');
            }
        })
    }))
}

if (languages) {
    const languageTitle = document.querySelector('.js-header-contacts-list-item-language')
    languages.forEach( item => item.addEventListener('click', () => {
        languageTitle.innerText = item.innerText;
    }))
}

const swiper = new Swiper('.swiper', {
    loop: true,
    // autoplay: true,
    alloTouchMove: true,
    followFinger: true,
    speed: 500,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3.5,
        }
    },
});




