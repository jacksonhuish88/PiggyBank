import React, { useState } from 'react';
import '../IncomeAccordions/IncomeAccordions.css';

function CategoryPopUp() {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  }

  return (
    <div>
      <button class='btn-primary' onClick={toggleForm}>
        Add Income Category
      </button>
      {showForm && (
        <>
          <div id='expensecategoryform' class='popup-form'>
            <div class="exitbutton">
              <button type='button' onClick={toggleForm}>X</button>
            </div>
              <h3>Add Income Category</h3>
              <form>
              {(<>
                    <label for="incomecategory">Income Name:</label>
                    <input type="text" id='incomecategory' name='incomecategory'/>
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