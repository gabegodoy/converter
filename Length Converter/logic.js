function lengthChanger(){
	var length = document.getElementById('input').value
	var data1 = document.getElementById('data1').value
	var data2 = document.getElementById('data2').value
	var result = document.getElementById('result')

	if (data1 == data2){
		result.innerHTML = 'The length units must be different.'	
	}
	else if (data1 == 'miles'){
		calculateMiles (length, data2)
	}
	else if (data1 == 'feet'){
		calculateFeet (length, data2)
	}
	else if (data1 == 'meters'){
		calculateMeters (length, data2)
	}
	else if (data1 == 'kilometers'){
		calculateKilometers (length, data2)
	}
	else if (data1 == 'nauticalMiles'){
		calculateNauticalMiles (length, data2)
	}
}

function calculateMiles (number, unit) {
	number = Number(number)
	var result = document.getElementById('result')

    if (unit == 'feet'){
        result.innerHTML = ((number * 5280).toFixed(2) + ' ft')
    }

	else if (unit == 'meters'){
		result.innerHTML = ((number * 1609).toFixed(2) + ' m')
	}

	else if (unit == 'kilometers'){
		result.innerHTML = ((number * 1.609344).toFixed(2) + ' km')
	}
	else if (unit == 'nauticalMiles'){
		result.innerHTML = ((number / 1.151).toFixed(2) + ' NM')
	}
}

function calculateFeet (number, unit) {
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'miles'){
		result.innerHTML = ((number / 5280).toFixed(2) + ' mi')
	}

	else if (unit == 'meters'){
		result.innerHTML = ((number / 3.281).toFixed(2) + ' m')
	}
	else if (unit == 'kilometers'){
		result.innerHTML = ((number / 3281).toFixed(2) + ' km')
	}
	else if (unit == 'nauticalMiles'){
		result.innerHTML = ((number / 6076).toFixed(2) + ' NM')
	}
}

function calculateMeters (number, unit) {
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'miles'){
		result.innerHTML = ((number / 1609).toFixed(2) + ' mi')
	}
	
	else if (unit == 'feet'){
		result.innerHTML = ((number * 3.281).toFixed(2) + ' ft')
	}
	else if (unit == 'kilometers'){
		result.innerHTML = ((number / 1000).toFixed(2) + ' km')
	}
	else if (unit == 'nauticalMiles'){
		result.innerHTML = ((number / 1852).toFixed(2) + ' NM')
	}
}

function calculateKilometers (number, unit){
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'miles'){
		result.innerHTML = ((number / 1.609).toFixed(2) + ' mi')
	}
	
	else if (unit == 'feet'){
		result.innerHTML = ((number * 3281).toFixed(2) + ' ft')
	}

	else if (unit == 'meters'){
		result.innerHTML = ((number * 1000).toFixed(2) + ' m')
	}

	else if (unit == 'nauticalMiles'){
		result.innerHTML = ((number / 1.852).toFixed(2) + ' NM')
	}
}

function calculateNauticalMiles (number, unit){
	number = Number(number)
	var result = document.getElementById('result');

	if (unit == 'miles'){
		result.innerHTML = ((number * 1.151).toFixed(2) + ' mi')
	}

	else if (unit == 'feet'){
		result.innerHTML = ((number * 6076).toFixed(2) + ' ft')
	}

	else if (unit == 'meters'){
		result.innerHTML = ((number * 1852).toFixed(2) + ' m')
	}

	else if (unit == 'kilometers'){
		result.innerHTML = ((number * 1.852).toFixed(2) + ' km')
	}
}