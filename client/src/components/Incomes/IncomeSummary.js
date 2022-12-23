import './IncomeSummary.css';
import '../../App.css';

const IncomeSummary = () => {
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
                    </tr>
                    </thead>
                    <tbody id='incomesummary'>
                    </tbody>
                </table>
            </div>
        </div> 
    )
}

export default IncomeSummary;