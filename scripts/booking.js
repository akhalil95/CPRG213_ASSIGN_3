/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let costPerDay = 0;
let numDaysSelected = 0;
let totalCost = 0;

const mondayButton = document.getElementById('monday');
const tuesdayButton = document.getElementById('tuesday');
const wednesdayButton = document.getElementById('wednesday');
const thursdayButton = document.getElementById('thursday');
const fridayButton = document.getElementById('friday');

const fullDayButton = document.getElementById('full');
const halfDayButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const calculatedCost = document.getElementById('calculated-cost');


/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

mondayButton.addEventListener('click', function() {
    if (!mondayButton.classList.contains('clicked')) {
    mondayButton.classList.add('clicked');
    numDaysSelected++;
    }
    updateTotalCost();
});

tuesdayButton.addEventListener('click', function() {
    if (!tuesdayButton.classList.contains('clicked')) {
    tuesdayButton.classList.add('clicked');
    numDaysSelected++;
    }
    updateTotalCost();
});

wednesdayButton.addEventListener('click', function() {
    if (!wednesdayButton.classList.contains('clicked')) {
    wednesdayButton.classList.add('clicked');
    numDaysSelected++;
    }
    updateTotalCost();
});

thursdayButton.addEventListener('click', function() {
    if (!thursdayButton.classList.contains('clicked')) {
    thursdayButton.classList.add('clicked');
    numDaysSelected++;
    }
    updateTotalCost();
});

fridayButton.addEventListener('click', function() {
    if (!fridayButton.classList.contains('clicked')) {
    fridayButton.classList.add('clicked');
    numDaysSelected++;
    }
    updateTotalCost();
});




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {

    mondayButton.classList.remove('clicked');
    tuesdayButton.classList.remove('clicked');
    wednesdayButton.classList.remove('clicked');
    thursdayButton.classList.remove('clicked');
    fridayButton.classList.remove('clicked');


    numDaysSelected = 0;
    totalCost = 0;


    calculatedCost.textContent = totalCost;
});






/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfDayButton.addEventListener('click', function() {

    costPerDay = 20;


    halfDayButton.classList.add('clicked');
    fullDayButton.classList.remove('clicked');


    updateTotalCost();
});





// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.


fullDayButton.addEventListener('click', function() {

    costPerDay = 35;


    fullDayButton.classList.add('clicked');
    halfDayButton.classList.remove('clicked');


    updateTotalCost();
});




/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function updateTotalCost() {

    totalCost = costPerDay * numDaysSelected;


    calculatedCost.innerHTML =  totalCost.toFixed(2);
}
