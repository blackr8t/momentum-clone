const infectedCls = document.querySelector('.js-corona__infected');
const dischargedCls = document.querySelector('.js-corona__discharged');
const isolatedCls = document.querySelector('.js-corona__isolated');
const deceasedCls = document.querySelector('.js-corona__deceased');
const positivityRateCls = document.querySelector('.js-corona__positivityRate');


function loadCoronaStatus() {
	fetch(
		'https://api.apify.com/v2/key-value-stores/TMFbhs7qtXpGpeaeP/records/LATEST?disableRedirect=true'
	).then(function (response) {
		return response.json();
	}).then(function (json) {
		// 데이터 파싱
		const infected = json.infected; //  누적 확진자
		const discharged = json.discharged; // 완치 (격리해제)
		const isolated = json.isolated; // 치료중(격리중)
		const deceased = json.deceased; // 사망
		const lastUpdatedAt = json.lastUpdatedAtSource; // 마지막 업데이트
		const positivityRate = json.positivityRate;
		return {
			infected,
			discharged,
			isolated,
			deceased,
			positivityRate,
			lastUpdatedAt,
		}

	}).then(function (corona) {
		// HTML 표현
		infectedCls.innerHTML = corona.infected;
		dischargedCls.innerHTML = corona.discharged;
		isolatedCls.innerHTML = corona.isolated;
		deceasedCls.innerHTML = corona.deceased;
		positivityRateCls.innerHTML = corona.positivityRate;

	}).then(function (corona) {
		// Local Storage 저장
	});
}

function init() {
	loadCoronaStatus();

	// 1시간 주기로 업데이트
	setInterval(loadCoronaStatus, 3600000);
}


init();