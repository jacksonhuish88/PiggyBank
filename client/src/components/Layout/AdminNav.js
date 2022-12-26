import './AdminNav.css';
import '../../App.css';
import ExecutiveSummary from '../Expenses/ExecutiveSummary';
import ExpenseSummary from '../Expenses/ExpenseSummary';
import ExpenseAccordion from '../Expenses/ExpenseAccordions/ExpenseAccordions';
import IncomeAccordion from '../Incomes/IncomeAccordions/IncomeAccordions';
import IncomeSummary from '../Incomes/IncomeSummary';

const AdminNav = () => {
    return (
        <div>
            <nav>
            <div className="contatiner-flex">
                <div className='row topbar'>
                    <div className="topmenu">
                        <div>Profile</div>
                        <div>Logout</div>
                    </div>
                </div>
            </div>
                <div className='row sidenav'>
                    <h4 style={{fontSize: "45px"}}>FINTRACK</h4>
                    <div className='sidemenu'>
                        <div>Dashboard</div>
                        <div>Menu Item 2</div>
                        <div>Menu Item 3</div>
                        <div style={{borderBottom: "solid black"}}>Plan a Trip</div>
                    </div>
                </div>
            </nav>
            <div className="container-flex py-2" style={{padding: "15rem"}}>
                <ExecutiveSummary />
                <div className='row'>
                    <div className='col 6'>
                        <ExpenseSummary />
                    </div>
                    <div className='col 6'>
                        <IncomeSummary />
                    </div>
                </div>
                <div className='row'>
                    <div className='col 6'>
                        <ExpenseAccordion />
                    </div>
                    <div className='col 6'>
                        <IncomeAccordion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNav;