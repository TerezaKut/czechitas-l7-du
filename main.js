/*
Místo pro váš program
*/
function salary (wage, hours, days) {
    let mesicniMzda = wage*hours*days;
    return mesicniMzda;
}

function taxed (salary, tax){
    let zdaneni = salary*(tax/100);
    return zdaneni;
}

function spocitejCistouMzdu (wage, hours, days, tax){
    let hrubaMzda = salary(wage, hours, days);
    let cistaMzda = hrubaMzda - taxed(hrubaMzda, tax);
    return cistaMzda; 
}

function calculate (number1, operation, number2) {
    let operace = String(operation);
    if (operace === '+'){
        return number1+number2;
    }

    if (operace=== '-'){
        return number1-number2;
    }
    
    if (operace=== '*'){
        return number1*number2;
    }

    if (operace=== '/'){
        return number1/number2;
    }
}

