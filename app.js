function daysInMonth(month) {
	var days = 31;
	
	var sentence = function () {
		console.log('There are ' + days + ' days in the month of ' + month);
}
	switch(month) {
		case 'January':
			sentence();
			break;

		case 'February':
			var days = 28;
			sentence();
			break;

		case 'March':
			sentence();
			break;
		
		case 'April':
			var days = 29;
			sentence();
			break;
		
		case 'May':
			sentence();
			break;
		
		case 'June':
			var days = 30;
			sentence();
			break;

		case 'July':
			sentence();
			break;
		
		case 'August':
			sentence();
			break;

		case 'September':
			var days = 30;
			sentence();
			break;

		case 'October':
			sentence();
			break;

		case 'November':
			var days = 30;
			sentence();
			break;

		case 'December':
			sentence();
			break;
	}
}

daysInMonth('November');