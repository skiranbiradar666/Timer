const cl = console.log;

const setZero = (num)=>{
	return (num < 10) ? "0" + num : num;
}

const countDownHandler =() =>{
	const countDown = document.getElementById("countDown");
	let currentTime = Date.now();
	let targateDate = new Date('March 15, 2026 23:59:59').getTime()
	
	let diff = targateDate - currentTime
	
	let days = diff/86400000;
	let daysInt = Math.floor(days);
	
	let hr = (diff % (86400000))/(1000*60*60)
	let hrInt = Math.floor(hr)
	
	let min = (diff %(1000*60*60))/(1000*60)
	let minInt = Math.floor(min)
	
	let sec = (diff % (1000*60))/1000
	let secInt = Math.floor(sec)
	
	countDown.innerHTML = `${setZero(daysInt)} Days ${setZero(hrInt)} Hours ${setZero(minInt)} min ${setZero(secInt)} sec`;
}
setInterval(countDownHandler, 1000);
	