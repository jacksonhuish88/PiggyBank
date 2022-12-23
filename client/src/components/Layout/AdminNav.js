import './AdminNav.css';

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
            <h1>This is where the content will go</h1>
        </div>
        </div>
    )
}

export default AdminNav;