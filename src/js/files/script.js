// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Функционал слайдера-слик (MW 3.2)
$(document).ready(function () {
	$('.presentation-main-screen__list').slick({
		//slidesToShow: 1, // кол-во показ. слайдов
		//adaptiveHeight: true, // адаптивная высота (false)
	});
})




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