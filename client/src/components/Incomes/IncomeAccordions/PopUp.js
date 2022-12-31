import React, { useState } from 'react';
import axios from "axios";
import '../IncomeAccordions/IncomeAccordions.css';

function CategoryPopUp() {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState(""); 
  const [rate, setRate] = useState(0); 
  const [weeklyHours,setWeeklyHours] = useState(0); 
  const [notes,setNotes] = useState(""); 

  const handleSubmit = (e) => {
    const expense = {
      title: title,
      rate: rate,
      weekly_hours: weeklyHours,
      notes: notes
    }

    let success = false

    axios.post("http://localhost:5500/income", expense)
      .then(response => success = response.data.created)
      .catch(error => console.log(error))
    console.log(success)
    e.preventDefault();
  }

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
          <div id='expensecategoryform' className='popup-form'>
            <div class="exitbutton">
              <button type='button' onClick={toggleForm}>X</button>
            </div>
              <h3>Add Income Category</h3>
              <form>
                    <label for="income_title">Title:</label>
                    <input type="text" id='income_title' name='title' onChange={e => setTitle(e.target.value)}/>
                    <br/>
                    <label for="income_rate">Hourly Rate:</label>
                    <input type="number" id='income_rate' name='rate' onChange={e => setRate(e.target.value)}/>
                    <br/>
                    <label for="income_hours">Weekly Hours:</label>
                    <input type="text" id='income_hours' name='weekly_hours' onChange={e => setWeeklyHours(e.target.value)}/>
                    <br/>
                    <label for="income_notes">Notes:</label>
                    <input type="textarea" id='income_notes' name='notes' onChange={e => setNotes(e.target.value)}/>
                    <br/>
                    <button type='button' onSubmit={e => {handleSubmit(e)}}>Submit</button>
              </form>
          </div>
        </>
      )}
    </div>
  );
}

export default CategoryPopUp;