function temperatureChanger(){
    var temperature = document.getElementById('input').value;
    var data1 = document.getElementById('data1').value;
	var data2 = document.getElementById('data2').value;
	var result = document.getElementById('result');

    if (data1 == data2){
		result.innerHTML = 'The temperature units must be different.'	
	}
	else if (data1 == 'celcius'){
        calculateCelcius (temperature, data2)
    }
    else if (data1 == 'kelvin'){
        calculateKelvin (temperature, data2)
    }
    else if (data1 == 'fahrenheit'){
        calculateFahrenheit (temperature, data2)
    }
}

function calculateCelcius (number, unit){
    number = Number(number)
	var result = document.getElementById('result')

    if (unit == 'kelvin'){
        result.innerHTML = ((number + 273.15).toFixed(2))
    }
    else if (unit == 'fahrenheit'){
        result.innerHTML = (((number * 1.8) +32).toFixed(2) + ' °F')
    }
}

function calculateKelvin (number, unit){
    number = Number(number)
	var result = document.getElementById('result')

    if (unit == 'celcius'){
        result.innerHTML = ((number - 273.15).toFixed(2) + ' °C')
    }
    // OVER MATH ANALISYS 
    else if (unit == 'fahrenheit'){
        result.innerHTML = (((1.8*(number-273)) + 32).toFixed(2) + ' °F')
    }
}

function calculateFahrenheit (number, unit){
    number = Number(number)
	var result = document.getElementById('result')   

    if (unit == 'celcius'){
        result.innerHTML = (((number-32)*0.5556).toFixed(2) + ' °C')
    }
    
    else if (unit == 'kelvin'){
        result.innerHTML = (((((number -32)*5)/9)+273.15).toFixed(2))
    }
}