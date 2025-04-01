
import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <nav>
            <Link to="home">Home</Link>
            <Link to="product">Product</Link>
            <Link to="contact">Contact</Link>
            <Link to="company">Company</Link>
            <Link to="nofound">Nofound</Link>
            <hr size="4" color="red"/>
        </nav>

        <Outlet/>

        <hr size="4" color="red"/>

        <footer>WWW.company.com alright reserved</footer>
        </>
    )
}
export default Layout;