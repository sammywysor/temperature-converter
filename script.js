document.getElementById("submit").onclick = function() {
    let temp = document.getElementById("number").value;
    temp = Number(temp);

    if (document.getElementById("cTemp").checked) {
        temp = toFarenheit(temp); 
        document.getElementById("answer").innerHTML = temp + " degrees Fahrenheit";
    } else if (document.getElementById("fTemp").checked) {
        temp = toCelsius(temp); 
        document.getElementById("answer").innerHTML = temp + " degrees Celsius";
    } else {
        document.getElementById("answer").innerHTML = "Please select a unit";
    }
};


function toCelsius(temp) {
  return (temp - 32) * 5/9;
}

function toFarenheit(temp) {
  return (temp * 9/5) + 32;
}
