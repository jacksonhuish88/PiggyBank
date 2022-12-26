import '../../App.css';

const ExecutiveSummary = () => {
    return (
        <div>
            <div class="col-12 mx-auto">
                <h4>EXECUTIVE SUMMARY</h4>
                <div class="chart table-responsive">
                    <table class="table">
                        <thead>
                        <tr>
                            <th scope="col">Income</th>
                            <th scope="col">Job Title</th>
                            <th scope="col">$IncomeTot/Month</th>
                            <th scope="col">$ExpenseTot/Month</th>
                            <th scope="col">$Savings/$Debt/Month</th>
                        </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default ExecutiveSummary;