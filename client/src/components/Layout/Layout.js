import AdminNav from "./AdminNav";
const Layout = ({children}) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    )
}

export default Layout;