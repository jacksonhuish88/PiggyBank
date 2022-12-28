import '../../App.css';
import axios from "axios";
import react from "react";


const IncomeSummary = () => {
    let [incomes, setIncomes] = react.useState([]);

    react.useEffect(() => {
        axios.get("http://localhost:5500/incomes")
        .then(response => {
            setIncomes(response.data);
        })
        .catch(error => console.log(error))
    }, []);

    return (
        <div>
            <h4>INCOME SUMMARY</h4>
            <div class="chart table-responsive">
                <table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Income Name</th>
                        <th scope="col">$/Wk</th>
                        <th scope="col">$/Month</th>
                        <th scope="col">Hours/Week</th>
                        <th scope="col">Notes</th>
                    </tr>
                    </thead>
                    <tbody id='incomesummary'>
                        {incomes.map(income => {
                            return (
                                <tr>
                                    <td>{income.title}</td>
                                    <td>{income.rate}</td>
                                    <td>{income.rate * 4}</td>
                                    <td>{income.weekly_hours}</td>
                                    <td>{income.notes}</td>
                                </tr>
                            )
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div> 
    )
}

export default IncomeSummary;