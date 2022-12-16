
// New Income Accordion
function addNewIncome() {
    // Get the new expense div
    let popup = document.getElementById('incomepopup');

    // Open Form
    open-popup.classList.add('open-popup');
};

function closeIncomePopUp(){
    let popup = document.getElementById('incomepopup');
    open-popup.classList.remove('open-popup');

    // Create new accordion button
    var btn = document.createElement("button");
    let income = document.getElementById("newincome");
    let new_income_category = document.getElementById('incomecategory').value;

    // Create new accordion panel
    var panel = document.createElement("div");
    panel.classList.add("panel");
    panel.innerHTML = '<table class="table table-responsive"><thead><tr><th scope="col">Check</th><th scope="col">Job Title</th><th scope="col">Hourly</th><th scope="col">Hrs/Week</th><th scope="col">Edit</th><th scope="col">Delete</th></tr></thead></table>'

    // Create new "Delete" button inside of accordion panel
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete Category";
    deleteBtn.style='float: right'
    deleteBtn.onclick = function() {
        deleteIncomeElement(this);
    };

    // Append the new accordion, panel, and "Delete" button to the income div
    var div = document.createElement('div');
    div.id = 'accordion-parent';
    div.appendChild(btn);
    div.appendChild(panel);
    panel.appendChild(deleteBtn);
    income.prepend(div);

    // Accordion Button Info
    btn.id = new_income_category + '_accordion'
    btn.style.backgroundColor = '#005a00';
    btn.style.color = 'white';
    btn.classList.add("accordion");
    btn.innerHTML = new_income_category;

    // Add event listener to the accordion button
    btn.addEventListener("click", function() {
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    });
};

function deleteIncomeElement(element) {
    element.parentElement.parentElement.remove(); 
};

function cancelIncomePopUp() {
    let popup = document.getElementById('incomepopup');
    open-popup.classList.remove('open-popup');
}