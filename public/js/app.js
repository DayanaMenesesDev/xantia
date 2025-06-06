
const headerOpenNavbarMenu = document.getElementById('headerOpenNavbarMenu');
const navbarMenu = document.getElementById('navbarMenu');
const headerCloseNavbarMenu = document.getElementById('headerCloseNavbarMenu');
const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
const containerCardSweden = document.querySelector('.main-art2__container-cards');
const containerCardEngland = document.querySelector('.main-art3__container-cards');
const containerCardComments = document.querySelector('.main-art5__container-cards');

headerOpenNavbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.add('navbarMenuOpen')
})

headerCloseNavbarMenu.addEventListener('click', ()=> {
    navbarMenu.classList.remove('navbarMenuOpen')
})


inputs.forEach(input => {
    input.addEventListener('focusin', () => {
        input.parentElement.classList.add('visible');
    });
    input.addEventListener('focusout', () => {
        input.parentElement.classList.remove('visible');
    });
});

import { dates } from './seed.js';

let cardsName = [dates.sweden, dates.england, dates.comments];

cardsName[0].forEach(s => {
    const frag = document.createDocumentFragment()
    const div = document.createElement('div');
    div.setAttribute('class', 'cards card-sweden')
    div.innerHTML = `
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <button>${s.button}</button>
    `
    frag.appendChild(div)
    containerCardSweden.appendChild(frag)
});


cardsName[1].forEach(s => {
    const frag = document.createDocumentFragment()
    const div = document.createElement('div');
    div.setAttribute('class', 'cards2 card-england')
    if (typeof s.button == 'object') {
        div.innerHTML = `
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <span>${s.button[0] + " " + s.button[1]}</span>
        `
        
    } else {div.innerHTML = `
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <button>${s.button}</button>
        `
    }
    frag.appendChild(div)
    containerCardEngland.appendChild(frag)
});


cardsName[2].forEach(s => {
    const frag = document.createDocumentFragment()
    const div = document.createElement('div');
    div.setAttribute('class', 'cards3 card-comments')
    div.innerHTML = `
        <div>
            <img src="./public/img/comments/${s.img}" alt="${s.name}">
        </div>
        <span>
            <h4>${s.name}</h4>
            <h5>${s.job}</h5>
        </span>
        <p>${s.description}</p>`
    frag.appendChild(div)
    containerCardComments.appendChild(frag)
});


/* FUNCION SLIDER */
const items = document.querySelectorAll('.cards');
const items2 = document.querySelectorAll('.cards2');

const sweden = (items)=> {
    let active = 0;
    function loadShow(){
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // show after
        let stt = 0;
        for(var i = active + 1; i < items.length; i ++){
            stt++;
            items[i].style.transform = `translateX(${30*stt}px) translateY(${-30*stt}px) scale(${1 - 0.1*stt}) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(3px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.2;
        }
        stt = 0;
        for(var i = (active - 1); i >= 0; i --){
            stt++;
            items[i].style.transform = `translateX(${-30*stt}px) translateY(${-30*stt}px) scale(${1 - 0.1*stt}) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(3px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.2;
        }
    }
    loadShow();



    let next = document.getElementById('next');
    let prev = document.getElementById('prev');
    next.onclick = function(){
    active = active + 1 < items.length ?  active + 1 : active;
    loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active -1 : active;
        loadShow();
    }

}
const england = (items)=> {
    let active = 0;
    function loadShow(){
        items[active].style.transform = `none`;
        items[active].style.zIndex = 1;
        items[active].style.filter = 'none';
        items[active].style.opacity = 1;

        // show after
        let stt = 0;
        for(var i = active + 1; i < items.length; i ++){
            stt++;
            items[i].style.transform = `translateX(${30*stt}px) translateY(${-30*stt}px) scale(${1 - 0.1*stt}) rotateY(-1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(3px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.2;
        }
        stt = 0;
        for(var i = (active - 1); i >= 0; i --){
            stt++;
            items[i].style.transform = `translateX(${-30*stt}px) translateY(${-30*stt}px) scale(${1 - 0.1*stt}) rotateY(1deg)`;
            items[i].style.zIndex = -stt;
            items[i].style.filter = 'blur(3px)';
            items[i].style.opacity = stt > 2 ? 0 : 0.2;
        }
    }
    loadShow();



    let next = document.getElementById('next2');
    let prev = document.getElementById('prev2');
    next.onclick = function(){
    active = active + 1 < items.length ?  active + 1 : active;
    loadShow();
    }
    prev.onclick = function(){
        active = active - 1 >= 0 ? active -1 : active;
        loadShow();
    }

}



sweden(items)
england(items2)