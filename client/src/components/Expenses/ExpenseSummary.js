import './ExpenseSummary.css';
import '../../App.css';

const ExpenseSummary = () => {
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
                        </tr>
                        </thead>
                        <tbody id='expensesummary'>
                        </tbody>
                    </table>
                </div>
        </div> 
    )
}

export default ExpenseSummary;
