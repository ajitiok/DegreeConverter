let celcius = document.getElementById('celcius');
let fahrenheit = document.getElementById('fahrenheit');
let kelvin = document.getElementById('kelvin');
let reamur = document.getElementById('reamur');

function celToInput(){
  let outputFahrenheit = (parseFloat(celcius.value) * 9/5) + 32;
  fahrenheit.value = parseFloat(outputFahrenheit.toFixed(2));

  let outputKelvin = (parseFloat(celcius.value) + 273 )
  kelvin.value = parseFloat(outputKelvin.toFixed(2));

  let outputReamur = (parseFloat(celcius.value) * 4/5 )
  reamur.value = parseFloat(outputReamur.toFixed(2));
}

function farToInput(){
  let outputCelcius = (parseFloat(fahrenheit.value) - 32 ) * 5/9;
  celcius.value = parseFloat(outputCelcius.toFixed(2));

  let outputReamur = (parseFloat(fahrenheit.value) - 32 ) * 4/9;
  reamur.value = parseFloat(outputReamur.toFixed(2));

  // let outputKelvin = ((parseFloat(fahrenheit.value) - 32) * 5/9) + 273.15;
  let outputKelvin = ((parseFloat(fahrenheit.value) + 459.67) * 5/9)
  kelvin.value = parseFloat(outputKelvin.toFixed(2));
}


function kelToInput(){
  let outputCelcius = (parseFloat(kelvin.value) - 273);
  celcius.value = parseFloat(outputCelcius.toFixed(2))

  let outputReamur = (parseFloat(kelvin.value) - 273.15) * 4/5;
  reamur.value = parseFloat(outputReamur.toFixed(2))

  let outputFahrenheit = (parseFloat(kelvin.value) * 9/5 ) - 459.4;
  fahrenheit.value = parseFloat(outputFahrenheit.toFixed(2));
}

function reaToInput() {
  let outputCelcius = (parseFloat(reamur.value) * 5/4);
  celcius.value = parseFloat(outputCelcius.toFixed(2));

  let outputFahrenheit = (parseFloat(reamur.value) * 9/4) + 32;
  fahrenheit.value = parseFloat(outputFahrenheit.toFixed(2));

  let outputKelvin = (parseFloat(reamur.value) * 5/4) + 273.15;
  kelvin.value = parseFloat(outputKelvin.toFixed(2))
}