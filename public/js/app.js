/* 


SECTION 2 
Sell ​​Limited Liability Company
We find the right buyer within 24 hours and guarantee a worry-free sale of your limited company.

Sell your company quickly and safely. We find a serious buyer for your company, usually within 24 hours*. Our specialists draft secure agreements and handle all paperwork.

We guarantee you as a seller a worry-free deal and maintain ongoing contact with both parties.

*The calculation is based on previous sales and may vary. Demand depends on the company's status, history and asking price, among other things.


SECTION 3
Liquidate a limited liability company
With our fast liquidation you don't have to wait 7-9 months for your money. Payment on the same day. A regular liquidation requires a lot of patience and knowledge. The process takes about 7-9 months. With our fast liquidation you get your share capital immediately, avoiding the work and continued liability.

Provided you provide the documents requested, we can usually pay out the remaining share capital on the same day.

After the transfer, you are immediately released from continued liability for the company.

The alternative is to terminate a limited liability company through liquidation, which today involves a cost of about 19,000 - 25,000 SEK and takes a long time
*/

const headerOpenNavbarMenu = document.getElementById('headerOpenNavbarMenu');
const navbarMenu = document.getElementById('navbarMenu');
const headerCloseNavbarMenu = document.getElementById('headerCloseNavbarMenu');
const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
const containerCardSweden = document.querySelector('.main-art2__container-cards');
const containerCardEngland = document.querySelector('.main-art3__container-cards');

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
})


cardsName[1].forEach(s => {
    const frag = document.createDocumentFragment()
    const div = document.createElement('div');
    div.setAttribute('class', 'cards2 card-england')
    div.innerHTML = `
        <h4>${s.title}</h4>
        <p>${s.description}</p>
        <button>${s.button}</button>
    `
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
})

console.log(cardsName[1][2].button);


console.log(typeof cardsName[0][2].button);


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