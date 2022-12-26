import React, { useState } from 'react';
import '../../../App.css';
import '../ExpenseAccordions/ExpenseAccordions.css';

function CategoryPopUp() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  }

  return (
    <div>
      <button class='btn-primary' onClick={toggleForm}>
        Add Expense Category
      </button>
      {showForm && (
        <>
          <div id='expensecategoryform' class='popup-form'>
            <div class="exitbutton">
              <button type='button' onClick={toggleForm}>X</button>
            </div>
            <h3>Add Expense Category</h3>
              <form>
              {(<>
                    <label for="expensecategory">Expense Name:</label>
                    <input type="text" id='expensecategory' name='expensecategory'/>
                    <br/>
                    <button type='button' onclick='closeIncomePopUp()'>Submit</button>
                </>)}
              </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryPopUp;