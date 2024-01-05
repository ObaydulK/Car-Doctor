import { Outlet } from "react-router-dom";
import Header from "./HeaderFooter/Header/Header";
import Footer from "./HeaderFooter/Footer/Footer";


const MainRouter = () => {
    return (
        <div className="bg-white">
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainRouter;