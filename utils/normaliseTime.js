_normaliseTime = function(date){
	date = date ? date : new Date();

	function fix(number){
		return number < 10 ? '0'+number : number;
	}

	var hours = fix(date.getHours()),
		minutes = fix(date.getMinutes()),
		seconds = fix(date.getSeconds()),

		day = fix(date.getDate()),
		month = fix((date.getMonth()+1)),
		year = date.getFullYear();

	return {
		date: [day,month,year].join('.'),
		time: [hours,minutes,seconds].join(':'),
		h: hours,
		m: minutes,
		s: seconds,
		d: day,
		m: month,
		y: year
	}
}