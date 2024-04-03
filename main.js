// input
var bill = document.querySelector("#bill-amount");
const tipSelected = document.querySelectorAll("tip");
var custom = document.querySelector("#custom-input");
var people = document.querySelector("#num-people");
// output
var tipAmount = document.querySelector('.tip-amount');
var totAmount = document.querySelector('.tot-amount');
// error people
var errorMessage = document.getElementById("error-message");
var reset = document.querySelector('#reset');

// get values
document.oninput = () => {
    calcTip();
    calcTot();
    totTip.innerHTML = totTip;
    totAmount.innerHTML = total;

}
// check n people
people.oninput = () => {
    if (people.value == 0) {
        people.classList.add('active');
        errorMessage.classList.add('active');
    } else {
        people.classList.remove('active');
        errorMessage.classList.remove('active');
    }
}
// calculate tip
let tip = 0;
function tipSelection (){
    tipSelected.forEach((tipSelection)=>{
        tipSelection.addEventListener('click', ()=>{
            tip = tipSelection.value;
        })
    })

}

let totTip = 0;
function calcTip() {
    tipSelection();

    if (tip !== 0) {
        totTip = "$" + Math.round((bill.value * tip / 100)*100)/100;
    } else {
        totTip = "$0.00";
    }
}

// calculate total
let total = 0
function calcTot() {
    
    if (bill.value>0 && people.value>0){
        total = "$" + Math.round((bill.value / people.value)*100)/100;
    } else {
        return total = "$0.00";
    }
}

// reset
reset.addEventListener('click', ()=> {
    if (people.classList.contains('active')){
        people.classList.remove('active');
        errorMessage.classList.remove('active');
        totTip = "$0.00";
        totAmount = "$0.00";
    } else {
        return;
    }
})