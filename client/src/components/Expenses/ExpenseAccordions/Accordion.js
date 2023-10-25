import React from 'react';
import '../../../App.css';
import '../ExpenseAccordions/ExpenseAccordions.css';

function Accordion(props) {
    const { category, handleDelete } = props;
    return (
      <div className="accordion">
        <div className="accordion-header">
          {category}
          <button class='deletebutton' type="button" onClick={handleDelete}>
            Delete Piggy Bank
          </button>
        </div>
      <div className="accordion-content">
        <table class='table table-responsive'>
            <thead>
                <tr>
                    <th scope='col'>Check</th>
                    <th scope='col'>Name</th>
                    <th scope='col'>$/Month</th>
                    <th scope='col'>Notes</th>
                    <th scope='col'>Edit</th>
                    <th scope='col'>Delete</th>
                </tr>
            </thead>
        </table>
      </div>
    </div>
  );
}

export default Accordion;