// input
var bill = document.querySelector("#bill-amount");
var tipSelected = document.querySelectorAll(".tip");
var custom = document.querySelector("#custom-tip");
var people = document.querySelector("#num-people");
// output
var tipAmount = document.querySelector('.tip-amount');
var totAmount = document.querySelector('.tot-amount');
// error people
var errorMessage = document.getElementById("error-message");
var reset = document.querySelector('#reset');

// get values
document.oninput = () => {
    calcTot();
    totAmount.innerHTML = total;
};

// check n people
people.oninput = () => {
    if (people.value == 0) {
        people.classList.add('active');
        errorMessage.classList.add('active');
    } else {
        people.classList.remove('active');
        errorMessage.classList.remove('active');
    }
};

// reset input
function resetInput() {
    tipSelected.forEach(el => {
        el.classList.remove('selected');
        tip = 0;
        customTip = 0;
        custom.value = "";
        tipAmount.innerHTML = "$0.00";
    });
};

// calculate tip
let tip = 0;
let customTip = 0;
let selectedTip = 0;
let totCustTip = 0;

function tipSelection (){
    
    // iterate tip inputs
    for (let i =0; i < tipSelected.length; i ++) {
        
        tipSelected[i].addEventListener('click', ()=>{
            // remove selection from not clicked
            resetInput();
            
            
            // add selection on click
            tipSelected[i].classList.add('selected');
            selectedTip = tipSelected[i].value;
            selectedTip = selectedTip.replace('%', '');
            
            // calc selected tip
            tip =  Math.round(((bill.value * selectedTip / 100)/people.value)*100)/100;
            tipAmount.innerHTML = "$" + tip;
        });
    };
    
    // custom tip setup
    custom.addEventListener('click', ()=>{
        // remove selection from set tip options
        resetInput();
    });
    
    // handle custom tip
    custom.oninput = () => {
        customTip = custom.value;
        if (customTip > 0) {
            totCustTip = Math.round(((bill.value * customTip / 100)/people.value)*100)/100;
            tipAmount.innerHTML =  "$" + totCustTip;
        } else {
            tipAmount.innerHTML = "$0.00";
            totCustTip = 0;
        }
    };
};

// calculate total
let total = 0
function calcTot() {
    console.log(tip);
    if (tip > 0){
        total = "$" + Math.round(((bill.value / people.value) + tip) *100)/100;
    } else if(tip == 0 && totCustTip > 0) {
        total = "$" + Math.round(((bill.value / people.value) + totCustTip) *100)/100;
    } else if (bill.value>0 && people.value>0) {
        total = "$" + Math.round((bill.value / people.value) *100)/100;
    } else {
        total = "$0.00";
    }
};

// reset
reset.addEventListener('click', ()=> {
    
    // reset tips
    resetInput();
    
    // reset output
    totAmount.innerHTML = "$0.00";
    
    // reset people
    if (people.classList.contains('active')){
        people.classList.remove('active');
        errorMessage.classList.remove('active');
    } else {
        return;
    }
    
});

tipSelection();