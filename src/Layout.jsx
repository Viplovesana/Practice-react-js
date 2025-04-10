
import { Link,Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <nav>
            <Link to="home">Home</Link>
            <Link to="insert">Insert</Link>
            <Link to="display">Display</Link>
        </nav>
        <hr size="7" color="red"/>
        <Outlet/>
        <hr size="7" color="red"/>
        <footer>
            WWW.MYcompany.com
        </footer>

        </>
    )
};
export default Layout;