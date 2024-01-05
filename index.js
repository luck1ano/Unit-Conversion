const toConvertInput = document.getElementById("to-convert-input");
const convertBtn = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result")
const meterFeet = 3.2808399;
const literGallon = 0.264172052;
const kgpound = 2.20462262;


// 1 meter = 3.281 feet
// 1 liter = 0.264 gallon
// 1 kilogram = 2.204 pound

convertBtn.addEventListener("click", function() {
    let toConvertValue = toConvertInput.value;
    let feet = (toConvertValue * meterFeet).toFixed(3);
    let meter = (toConvertValue / meterFeet).toFixed(3);
    let liter = (toConvertValue * literGallon).toFixed(3);
    let gallon = (toConvertValue / literGallon).toFixed(3);
    let pound = (toConvertValue * kgpound).toFixed(3);
    let kilogram = (toConvertValue / kgpound).toFixed(3);
    lengthResult.innerHTML = `${toConvertValue} meters = ${feet} feet | ${toConvertValue} feet = ${meter} meters`;
    volumeResult.innerHTML = `${toConvertValue} liters = ${liter} gallons | ${toConvertValue} gallons  = ${gallon} liters`;
    massResult.innerHTML = `${toConvertValue} kilos  = ${pound} pounds | ${toConvertValue} pounds  = ${kilogram} kilos`;
})