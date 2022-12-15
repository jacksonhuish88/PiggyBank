
// New Income Accordion
function addNewIncome() {
    // Get the new expense div
    var expenses = document.getElementById("newincome");
    let popup = document.getElementById('incomepopup');
    // Create new accordion button
    var btn = document.createElement("button");
    btn.id = 'new_income'
    btn.style='background-color:lightgreen'
    btn.classList.add("accordion");
    btn.innerHTML = "New Income";

    // Create new accordion panel
    var panel = document.createElement("div");
    panel.classList.add("panel");
    panel.innerHTML = '<table class="table"><thead><tr><th scope="col">Check</th><th scope="col">Job Title</th><th scope="col">Hourly</th><th scope="col">Hrs/Week</th><th scope="col">Edit</th><th scope="col">Delete</th></tr></thead></table>'

    // Create new "Delete" button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style='float: right'
    deleteBtn.onclick = function() {
        deleteIncomeElement(this);
    };

    // Append the new accordion, panel, and "Delete" button to the expenses div
    var div = document.createElement('div');
    div.appendChild(btn);
    div.appendChild(panel);
    panel.appendChild(deleteBtn);
    expenses.appendChild(div);

    // Open Form
    open-popup.classList.add('open-popup');
};

function closeIncomePopUp(){
    let popup = document.getElementById('incomepopup');
    open-popup.classList.remove('open-popup');

    let new_btn = document.getElementById('new_income')
    let new_income_name = document.getElementById('incomename').value
    new_btn.innerHTML = new_income_name
    new_btn.id = new_income_name
};

function deleteIncomeElement(element) {
    element.parentElement.parentElement.remove(); 
};