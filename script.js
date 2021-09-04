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
function calculateBirthday(){
    getInput();
    dayOfWeek = ((Math.floor(cc / 4) - 2 * cc -1) + (Math.floor(5 * yy / 4)) + (Math.floor(26 * (month + 1) / 10)) + day) % 7;
    // day_of_week = Math.floor(day_of_week);
    console.log(`Day of the week: ${dayOfWeek}`);
    checkGender();
}

function checkGender(){
    let radios = document.getElementsByName("radio");
    if(radios[0].checked == true) {
        gender = "Male";
    }else if(radios[1].checked == true){
        gender = "Female";
    }else{
        console.log("none is checked");
    }
    

    if (gender == 'Male') {
        switch (dayOfWeek) {
            case 0:
                result.innerHTML = `Your Akan name is ${maleNames[0]}`;
                break;
            case 1:
                result.innerHTML = `Your Akan name is ${maleNames[1]}`;
                break;  
            case 2:
                result.innerHTML = `Your Akan name is ${maleNames[2]}`;
                break;
            case 3:
                result.innerHTML = `Your Akan name is ${maleNames[3]}`;
                break;              
            case 4:
                result.innerHTML = `Your Akan name is ${maleNames[4]}`;
                break;   
            case 5:
                result.innerHTML = `Your Akan name is ${maleNames[5]}`;
                break;
            case 6:
                result.innerHTML = `Your Akan name is ${maleNames[6]}`;
                break;
    
            }

        }
        if (gender == 'Female') {
            switch (dayOfWeek) {
                case 0:
                    result.innerHTML = "Your Akan Name is Akosua"
                    break;
                
                case 1:
                    result.innerHTML = "Your Akan Name is Adwoa"
                    break;    
                case 2:
                    result.innerHTML = "Your Akan Name is Abenaa"
                    break;
                case 3:
                    result.innerHTML = "Your Akan Name is Akua"
                    break;                
                case 4:
                    result.innerHTML = "Your Akan Name is Yaa"
                    break;    
                case 5:
                    result.innerHTML = "Your Akan Name is Afua"
                    break;
                case 6:
                    result.innerHTML = "Your Akan Name is Ama"
                    break;
            
        }
    }
}
