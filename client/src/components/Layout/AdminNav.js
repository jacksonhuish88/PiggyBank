import './AdminNav.css';
import '../../App.css';
import AddChildAccordion from '../Expenses/ExpenseAccordions/AddChildAccordion';

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
                    <h4 style={{fontSize: "36px"}}>Piggy Bank</h4>
                    <div className='sidemenu'>
                        <div>Dashboard</div>
                        <div>Menu Item 2</div>
                        <div>Menu Item 3</div>
                        <div style={{borderBottom: "solid black"}}>Plan a Trip</div>
                    </div>
                </div>
            </nav>
            <div className="container-flex py-2" style={{padding: "15rem"}}> 
                <div className='row'>
                    <div className='col 6'>
                        <AddChildAccordion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminNav;