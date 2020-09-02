const clockDate = document.querySelector('.js-clock__date');
const clockTime = document.querySelector('.js-clock__time');


function convertTwoDigit(num) {
	return num < 10 ? `0${num}` : num
}


function curDateTime() {
	const date = new Date();
	const year = date.getFullYear();
	const month = convertTwoDigit(date.getMonth() + 1);
	const day = convertTwoDigit(date.getDate());
	const hour = convertTwoDigit(date.getHours());
	const minute = convertTwoDigit(date.getMinutes());

	let dayOfWeek = ['일', '월', '화', '수', '금', '토'][date.getDay()];

	clockDate.innerHTML = `${year}.${month}.${day} ${dayOfWeek}요일`;
	clockTime.innerHTML = `${hour}:${minute}`;

}

function init() {
	setInterval(curDateTime, 1000);
}

init();