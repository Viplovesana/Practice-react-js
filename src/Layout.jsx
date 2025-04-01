
import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
    return(
        <>
        <nav>
            <Link to="home">Home</Link>
            <Link to="about">About</Link>
            <Link to="contact">Contact</Link>
            <hr size="4" color="red"/>
        </nav>

        <Outlet/>

        <hr size="4" color="red"/>

        <footer>WWW.company.com alright reserved</footer>
        </>
    )
}
export default Layout;