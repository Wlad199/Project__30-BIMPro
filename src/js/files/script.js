// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


//  ====================================================================================================//

// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.image-main-screen').slick({
		slidesToShow: 1, // кол-во показ. слайдов
		arrows: false, // стрелки
		autoplay: true, // автовоспроизведение (false)
		//dots: true,
		//infinite: true,
		speed: 1000,
		fade: true,
		cssEase: 'linear'
	});
})

//  ====================================================================================================//


let parent = document.querySelector('.ask-questions');
let menuItem = parent.querySelectorAll('.ask-questions__item');

parent.addEventListener('click', (event) => {
	// Отлавливаем элемент в родители на который мы нажали
	let target = event.target.closest('.ask-questions__item');

	// Проверяем тот ли это элемент который нам нужен
	if (target.classList.contains('ask-questions__item')) {
		for (let i = 0; i < menuItem.length; i++) {
			// Убираем у других
			menuItem[i].classList.remove('_active');
		}
		// Добавляем тому на который нажали
		target.classList.add('_active');
	}
});

//  ====================================================================================================//


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.slider__content').slick({
		slidesToShow: 4, // кол-во показ. слайдов
		dots: true,
		//autoplay: true, // автовоспроизведение (false)
	});
})

//  ====================================================================================================//

//let parentTwo = document.querySelector('.ask-list');
//let menuItemTwo = parent.querySelectorAll('.ask-item');

//parentTwo.addEventListener('click', (event) => {
//	// Отлавливаем элемент в родители на который мы нажали
//	let target = event.target.closest('.ask-item');

//	// Проверяем тот ли это элемент который нам нужен
//	if (target.classList.contains('ask-item')) {
//		for (let i = 0; i < menuItemTwo.length; i++) {
//			// Убираем у других
//			menuItemTwo[i].classList.remove('_active');
//		}
//		// Добавляем тому на который нажали
//		target.classList.add('_active');
//	}
//});

// questions ====================================================================================================//

const element = document.querySelectorAll('.item-question')
const modules = document.querySelectorAll('.answer-questions__content')

function showBlock01() {
	modules.forEach(el => {
		el.style.display = "none"
	});
	modules[0].style.display = "block"
}
function showBlock02() {
	modules.forEach(el => {
		el.style.display = "none"
	});
	modules[1].style.display = "block"
}
function showBlock03() {
	modules.forEach(el => {
		el.style.display = "none"
	});
	modules[2].style.display = "block"
}

element[0].addEventListener('click', showBlock01)
element[1].addEventListener('click', showBlock02)
element[2].addEventListener('click', showBlock03)

// information ====================================================================================================//

const itemAsk = document.querySelectorAll('.ask-item')
const contentAnswer = document.querySelectorAll('.answer-information')

function showContent01() {
	contentAnswer.forEach(el => {
		el.style.display = "none"
	});
	contentAnswer[0].style.display = "block"
}
function showContent02() {
	contentAnswer.forEach(el => {
		el.style.display = "none"
	});
	contentAnswer[1].style.display = "block"
}
function showContent03() {
	contentAnswer.forEach(el => {
		el.style.display = "none"
	});
	contentAnswer[2].style.display = "block"
}

itemAsk[0].addEventListener('click', showContent01)
itemAsk[1].addEventListener('click', showContent02)
itemAsk[2].addEventListener('click', showContent03)

//  ====================================================================================================//


let paren = document.querySelector('.ask-list');
let askItem = paren.querySelectorAll('.ask-item');

paren.addEventListener('click', (event) => {
	// Отлавливаем элемент в родители на который мы нажали
	let target = event.target.closest('.ask-item');

	// Проверяем тот ли это элемент который нам нужен
	if (target.classList.contains('ask-item')) {
		for (let i = 0; i < askItem.length; i++) {
			// Убираем у других
			askItem[i].classList.remove('_active');
		}
		// Добавляем тому на который нажали
		target.classList.add('_active');
	}
});