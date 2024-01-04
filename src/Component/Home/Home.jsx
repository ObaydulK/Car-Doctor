import { Link } from "react-router-dom";

const Home = () => {
    const Menu =
        <>
            <li> <Link to="/">Home</Link> </li>
            <li> <Link to="/about">About</Link> </li>
            <li> <Link to="/services">Services</Link> </li>
            <li> <Link to="/blog">Blog</Link> </li>
            <li> <Link to="/contact">Contact</Link> </li>


        </>

    return (
        <>
            <div>
                <div className="bg-slate-100 text-black">

                    {/* navber part stard */}
                    <div className="navbar font-bold fixed">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </div>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {Menu}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl"> Car Doctor</a>
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
                    {/* Banner part Stard */}
                    <div className="pb-14">
                        <div>
                            <div className="hero " style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Banner part end */}
                    {/* Hero part Stard */}
                    <div>
                        <div>
                            {/* left pard end  */}
                            <div className="w-3/4 min-h-full  ">
                                <div className="p-10">
                                    <img src="https://i.ibb.co/nMyw2zb/Rectangle-1540.png" alt="" />
                                    <div>
                                        <h1 className="text-4xl py-5 font-bold">Unique Car Engine Service</h1>
                                        <p className="text-2xl"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                    </div>
                                </div>
                                {/* services time stard*/}
                                <div>
                                    <div className="flex">
                                        <div className="p-10">
                                            <h1>instant Care Services</h1>
                                            <p>It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                        </div>
                                    </div>
                                </div>

                                {/* services time end */}

                            </div>
                            {/* left pard end  */}

                            <div className="w-3/12"></div>
                        </div>
                    </div>



                    {/* Hero part end */}



















































                </div>
            </div>
        </>
    );
};

export default Home;