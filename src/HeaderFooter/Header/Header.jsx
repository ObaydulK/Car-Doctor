import { Link } from "react-router-dom";


const Header = () => {
    const Menu =
        <>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/services">Services</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>
        </>
    return (
        <div>
            {/* navber part stard */}
            <div className="navbar font-bold  ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {Menu}
                        </ul>
                    </div>
                    <div className="items-center ">
                        <img className="w-14 ml-16" src="https://i.ibb.co/xYPkgKw/Group-1-removebg-preview.png" alt="" />
                        <h1 className="pl-12">Car Doctor</h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {Menu}
                    </ul>
                </div>
                <div className="navbar-end text-black">
                    <a className="btn btn-outline p-3">Appointment</a>
                </div>
            </div>
            {/* navber part end */}
        </div>
    );
};

export default Header;