import { Outlet } from "react-router-dom"
import Footer from "./footer"
import Headers from "./header"
import ScrollToTop from "../component/scrollToTop"

const Layout = () => {
    return (
        <>
            <ScrollToTop />
            <Headers />
                <Outlet />
            <Footer />
        </>
    )
}

export default Layout;