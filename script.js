let maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
let femaleNames = ["Akosua", "Adowoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
let gender;
let raw_year, cc, month, day, yy, dayOfWeek;

let result = document.getElementById('output');


function getInput(){

    month = parseInt(document.getElementById("month").value);
    day = parseInt(document.getElementById("day").value);
    if ((day <= 0) || (day > 31)) {
        document.getElementById("output").innerHTML = "Invalid day"
    }
    else if ((month <= 0) || (month > 31)) {
        document.getElementById("output").innerHTML = "Invalid month"
    }
    else {
        raw_year = document.getElementById("year").value;
        cc = Math.floor(raw_year/100);
        yy = raw_year % 100;
    }

}