import '../../App.css';
import react from "react";
import axios from "axios";

const ExpenseSummary = () => {
    let [expenses, setExpenses] = react.useState([]);

    react.useEffect(() => {
        axios.get("http://localhost:5500/expenses")
            .then(response => setExpenses(response.data))
            .catch(err => console.log(err))
    }, []);

    return (
        <div>
                <h4>EXPENSE SUMMARY</h4>
                <div class="chart table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Expense Name</th>
                            <th scope="col">$/Wk</th>
                            <th scope="col">$/Month</th>
                            <th scope="col">Notes</th>
                        </tr>
                        </thead>
                        <tbody id='expensesummary'>
                            {expenses.map(expense => {
                                return (
                                    <tr>
                                        <td>{expense.name}</td>
                                        <td>{expense.monthly_total / 4}</td>
                                        <td>{expense.monthly_total}</td>
                                        <td>{expense.notes}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
        </div> 
    )
}

export default ExpenseSummary;
