import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Headers from "./header"

const Layout = () => {
    return (
        <>
            <Headers />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout;