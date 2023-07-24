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