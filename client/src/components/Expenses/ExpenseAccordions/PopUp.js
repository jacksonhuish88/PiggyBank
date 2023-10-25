import React, { useState } from 'react';
import '../../../App.css';
import '../ExpenseAccordions/ExpenseAccordions.css';
import Accordion from '../ExpenseAccordions/Accordion';

function CategoryPopUp() {
  const [showForm, setShowForm] = useState(false);
  const [expenseCategories, setExpenseCategories] = useState([]);
  const [newCategoryName, setNewCategoryName] = useState('');

  const toggleForm = () => {
    setShowForm(prevShowForm => !prevShowForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setExpenseCategories([...expenseCategories, newCategoryName]);
    setNewCategoryName('');
    toggleForm();
  };

  const handleCategoryNameChange = (event) => {
    setNewCategoryName(event.target.value);
  };

  const handleDelete = (index) => {
    setExpenseCategories(
      expenseCategories.filter((category, i) => i !== index)
    );
  };

  return (
    <div>
      <button class='btn-primary' onClick={toggleForm}>
        Add Child
      </button>
      {showForm && (
        <>
          <div id='expensecategoryform' class='popup-form'>
            <div class="exitbutton">
              <button type='button' onClick={toggleForm}>X</button>
            </div>
            <h3>Add Child</h3>
              <form onSubmit={handleSubmit}>
                <label for="expensecategory">Child's Name:</label>
                <input
                  type="text"
                  id='expensecategory'
                  name='expensecategory'
                  value={newCategoryName}
                  onChange={handleCategoryNameChange}
                />
                <br/>
                <button type='submit'>Submit</button>
              </form>
          </div>
        </>
      )}
      {expenseCategories.map((category, index) => (
        <Accordion
          key={index}
          category={category}
          handleDelete={() => handleDelete(index)}
        />
      ))}
    </div>
  );
}

export default CategoryPopUp;