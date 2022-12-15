// New Expense Accordion
function addNewExpense() {
    // Get the new expense div
    let expenses = document.getElementById("newexpense");
    let popup = document.getElementById('expensepopup');
    // Create new accordion button
    var btn = document.createElement("button");
    btn.id = 'new_expense'
    btn.name = 'expense_group'
    btn.classList.add("accordion");
    btn.innerHTML = 'New Expense';

    // Create new accordion panel
    var panel = document.createElement("div");
    panel.classList.add("panel");
    panel.innerHTML = "<table class='table'><thead><tr><th scope='col'>Check</th><th scope='col'>Name</th><th scope='col'>$/Month</th><th scope='col'>Address</th><th scope='col'>Notes</th><th scope='col'>Edit</th><th scope='col'>Delete</th></tr></thead></table>";

    // Create new "Delete" button
    var deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.style='float: right'
    deleteBtn.onclick = function() {
        deleteExpenseElement(this);
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

function closeExpensePopUp(){
    let popup = document.getElementById('expensepopup');
    open-popup.classList.remove('open-popup');

    let new_btn = document.getElementById('new_expense');
    let new_expense_category = document.getElementById('expensecategory').value;
    new_btn.innerHTML = new_expense_category;
    new_btn.id = new_expense_category;

    // Get all elements with the name "myInput"
    var inputElements = document.getElementsByName("expense_group");
    
    // Create an array from the array-like object
    var inputArray = Array.from(inputElements);

    // Getting into expense summary body
    summarybody = document.getElementById('expensesummary');
    
    // cycling through expense accordions
    for (var i = 0; i < inputArray.length; i++) {
        // Get the current expense
        var expense = inputArray[i];
        // Get the value of the expense
        var expense_category = expense.innerHTML;
        // Set summary row id
        var expense_category_id = expense_category + '_row';
        
        // Add a new row to the HTML table
        summarybody.innerHTML += '<tr id="' + expense_category_id + '"><td>' + expense_category + '</td></tr>';
    };
};

function deleteExpenseElement(element) {
    // Get the previous sibling element of the element
    var previousSibling = element.parentElement.previousElementSibling;
  
    // Check if the previous sibling element has an id
    if (previousSibling.id) {
      // Get the element with the id equal to the previous sibling's id plus "_row"
      let summary_row = document.getElementById(previousSibling.id + "_row");
  
      // Check if the summary row element exists
      if (summary_row) {
        // Remove the parent element of the element
        element.parentElement.parentElement.remove();
  
        // Remove the summary row element
        summary_row.remove();
      }
    }
  }