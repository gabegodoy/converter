function speedChanger(){
	var speed = document.getElementById('input').value
	var data1 = document.getElementById('data1').value
	var data2 = document.getElementById('data2').value
	var result = document.getElementById('result')

	if (data1 == data2){
		result.innerHTML = 'The speed units must be different.'	
	}
	else if (data1 == 'milesPerHour'){
		calculateMilesPerHour (speed, data2)
	}
	else if (data1 == 'feetPerSecond'){
		calculateFeetPerSecond (speed, data2)
	}
	else if (data1 == 'metersPerSecond'){
		calculateMetersPerSecond (speed, data2)
	}
	else if (data1 == 'kilometersPerHour'){
		calculateKilometersPerHour (speed, data2)
	}
	else if (data1 == 'knots'){
		calculateKnots (speed, data2)
	}
}

function calculateMilesPerHour (number, unit) {
	number = Number(number)
	var result = document.getElementById('result')

    if (unit == 'feetPerSecond'){
        result.innerHTML = (((number * 5.280) / 3.6).toFixed(2) + ' f.p.s')
    }

	else if (unit == 'metersPerSecond'){
		result.innerHTML = ((number / 2.237).toFixed(2) + ' m/s')
	}

	else if (unit == 'kilometersPerHour'){
		result.innerHTML = ((number * 1.609344).toFixed(2) + ' km/h')
	}
	else if (unit == 'knots'){
		result.innerHTML = ((number * 0.868976).toFixed(2) + ' knots')
	}
}

function calculateFeetPerSecond (number, unit) {
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'milesPerHour'){
		result.innerHTML = ((number * 0.681818).toFixed(2) + ' mi/h')
	}

	else if (unit == 'metersPerSecond'){
		result.innerHTML = ((number / 3.281).toFixed(2) + ' m/s')
	}
	else if (unit == 'kilometersPerHour'){
		result.innerHTML = ((number * 1.097).toFixed(2) + ' km/h')
	}
	else if (unit == 'knots'){
		result.innerHTML = ((number / 1.688).toFixed(2) + ' knots')
	}
}

function calculateMetersPerSecond (number, unit) {
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'milesPerHour'){
		result.innerHTML = ((number * 2.237).toFixed(2) + ' mi/h')
	}
	
	else if (unit == 'feetPerSecond'){
		result.innerHTML = ((number * 3.281).toFixed(2) + ' f.p.s')
	}
	else if (unit == 'kilometersPerHour'){
		result.innerHTML = ((number * 3.6).toFixed(2) + ' km/h')
	}
	else if (unit == 'knots'){
		result.innerHTML = ((number * 1.944).toFixed(2) + ' knots')
	}
}

function calculateKilometersPerHour (number, unit){
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'milesPerHour'){
		result.innerHTML = ((number / 1.609).toFixed(2) + ' mi/h')
	}
	
	else if (unit == 'feetPerSecond'){
		result.innerHTML = ((number / 1.097).toFixed(2) + ' f.p.s')
	}

	else if (unit == 'metersPerSecond'){
		result.innerHTML = ((number / 3.6).toFixed(2) + ' m/s')
	}

	else if (unit == 'knots'){
		result.innerHTML = ((number / 1.852).toFixed(2) + ' knots')
	}
}

function calculateKnots (number, unit){
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'milesPerHour'){
		result.innerHTML = ((number * 1.151).toFixed(2) + ' mi/h')
	}

	else if (unit == 'feetPerSecond'){
		result.innerHTML = ((number * 1.688).toFixed(2) + ' f.p.s')
	}

	else if (unit == 'metersPerSecond'){
		result.innerHTML = ((number / 1.944).toFixed(2) + ' m/s')
	}

	else if (unit == 'kilometersPerHour'){
		result.innerHTML = ((number * 1.852).toFixed(2) + ' km/h')
	}
}