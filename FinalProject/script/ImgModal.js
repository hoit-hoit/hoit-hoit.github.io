'use strict';

const Modalopen1Btn = document.querySelector('.button--open1');
const Modalclose1Btn = document.querySelector('.button--close1');
const modal1 = document.querySelector('.modal--bg1');
const Modalopen2Btn = document.querySelector('.button--open2');
const Modalclose2Btn = document.querySelector('.button--close2');
const modal2 = document.querySelector('.modal--bg2');
const Modalopen3Btn = document.querySelector('.button--open3');
const Modalclose3Btn = document.querySelector('.button--close3');
const modal3 = document.querySelector('.modal--bg3');
const Modalopen4Btn = document.querySelector('.button--open4');
const Modalclose4Btn = document.querySelector('.button--close4');
const modal4 = document.querySelector('.modal--bg4');


Modalopen1Btn.addEventListener('click', showModal1);
Modalclose1Btn.addEventListener('click', closeModal1);
Modalopen2Btn.addEventListener('click', showModal2);
Modalclose2Btn.addEventListener('click', closeModal2);
Modalopen3Btn.addEventListener('click', showModal3);
Modalclose3Btn.addEventListener('click', closeModal3);
Modalopen4Btn.addEventListener('click', showModal4);
Modalclose4Btn.addEventListener('click', closeModal4);

function showModal1() {
    modal1.classList.remove('hidden');
    modal1.classList.add('visible');
}
function closeModal1() {
    modal1.classList.add('hidden');
    modal1.classList.remove('visible');
}

function showModal2() {
    modal2.classList.remove('hidden');
    modal2.classList.add('visible');
}
function closeModal2() {
    modal2.classList.add('hidden');
    modal2.classList.remove('visible');
}

function showModal3() {
    modal3.classList.remove('hidden');
    modal3.classList.add('visible');
}
function closeModal3() {
    modal3.classList.add('hidden');
    modal3.classList.remove('visible');
}

function showModal4() {
    modal4.classList.remove('hidden');
    modal4.classList.add('visible');
}
function closeModal4() {
    modal4.classList.add('hidden');
    modal4.classList.remove('visible');
}