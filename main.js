var bill = document.getElementById("bill-amount");
var tip = document.querySelectorAll("tip");
var btn = document.querySelectorAll("btn");
console.log(tip);
var people = document.getElementById("num-people");
var custom = document.querySelector("custom-input");
var errorMessage = document.getElementById("error-message");


//set bill value

let billValue = 0;

function validateFloat(x) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return x.match(rgx);
}

bill.addEventListener('input', setBillValue);

function setBillValue() {

    if (bill.value.includes(",")) {
        bill.value = bill.value.replace(',', '.');
    }

    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.lenght-1);
    }

    billValue = parseFloat(bill.value);
};


//manage tip

let tipValue = 0;
let customValue = 0;

function handleClick(event) {
    tip.forEach(btn => {

        btn.classList.remove("tip-active");

        if (event.target.value == btn.value) {

            btn.classList.add("tip-active");
            tipValue = parseFloat(tip.value)/100;
        }
    })
}



//set people value

let peopleValue = 0;

function validatePeople(z) {
        var rgx = /^[0-9]*/;
        return z.match(rgx);
;}


people.addEventListener('input', setPeopleValue);
function setPeopleValue() {

    if (!validatePeople(people.value)) {
        people.value = people.value.substring(0, people.value.lenght-1);
    }

    peopleValue = parseFloat(people.value);

    //call error message on people 0
    error();
};


//display error message on people 0
function error() {
    if (peopleValue == 0) {
        errorMessage.style.display = "block";
        people.style.border = "1px solid rgb(255, 0, 0)";
    } else {
        errorMessage.style.display = "none";
        people.style.border = "";
    };
};

// calculation function

function calculate() {
    
        let totalValue = (billValue * tipValue / peopleValue);
        
}