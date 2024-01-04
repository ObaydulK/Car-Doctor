import { Link } from "react-router-dom";
import { FaArrowRight, FaFileAlt } from "react-icons/fa";

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
                <div className="bg-slate-100 text-black capitalize">

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
                                <div className="hero-overlay  bg-opacity-60"></div>
                                <div className="hero-content text-center text-neutral-content">
                                    <div className="max-w-md">
                                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                        <p className="mb-5 text-justify">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                        <button className="btn btn-primary">Get Started</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Banner part end */}
                    {/* Hero part Stard */}

                    <div className=" flex">
                        {/* left pard end  */}
                        <div className="w-3/4 px-5 ">
                            <div className="">
                                <img className="w-full" src="https://i.ibb.co/nMyw2zb/Rectangle-1540.png" alt="" />
                                <div>
                                    <h1 className="text-4xl py-5 font-bold">Unique Car Engine Service</h1>
                                    <p className="text-2xl text-justify"> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                                </div>
                            </div>
                            {/* services time stard*/}
                            <div className="pt-10">
                                <div className="flex gap-4  pb-5 ">
                                    <div className="p-10  shadow bg-slate-300 rounded-lg w-3/6">
                                        <h1 className="text-2xl font-bold">instant Care Services</h1>
                                        <p className="">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                    </div>
                                    <div className="p-10  shadow bg-slate-300 rounded-lg w-3/6">
                                        <h1 className="text-2xl font-bold">24/7 Quality Service</h1>
                                        <p className="">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4  ">
                                    <div className="p-10  shadow bg-slate-300 rounded-lg w-3/6">
                                        <h1 className="text-2xl font-bold">Easy Customer Service</h1>
                                        <p className="">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                    </div>
                                    <div className="p-10  shadow bg-slate-300 rounded-lg w-3/6 border-t-red-800">
                                        <h1 className="text-2xl font-bold">Quality Cost Service</h1>
                                        <p className="">It uses a dictionary of over 200 Latin words, combined with a model sentence structures.</p>
                                    </div>
                                </div>
                                <p className=" text-2xl pt-10 text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. </p>
                            </div>
                            {/* services time end */}
                            {/* Car Wash Steps to Process stard */}
                            <div className=" ">
                                <h1 className="text-3xl py-8 font-bold">3 Simple Staps To Process</h1>
                                <p className="text-2xl py-2xl text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text</p>
                            </div>
                            {/* Process step  */}
                            <div className="flex gap-5 py-10">
                                <div className="card  items-center m-auto border ">
                                    {/* <div className="m-auto w-3/4 h-3/4 bg-red-500  rounded-full text-3xl" >
                                            <div className="text-center mt-14 text-5xl  ">1</div>
                                        </div> */}
                                    <div className="card-body bg-slate-300">
                                        <h1 className="text-center text-3xl font-bold bg-red-600 rounded-full w-10 h-10 m-auto"> 1</h1>
                                        <h2 className="card-title font-bold">Stap Two</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>

                                    </div>
                                </div>
                                <div className="card  items-center m-auto border ">
                                    {/* <div className="m-auto w-3/4 h-3/4 bg-red-500  rounded-full text-3xl" >
                                            <div className="text-center mt-14 text-5xl  ">1</div>
                                        </div> */}
                                    <div className="card-body bg-slate-300">
                                        <h1 className="text-center text-3xl font-bold bg-red-600 rounded-full w-10 h-10 m-auto"> 2</h1>
                                        <h2 className="card-title font-bold">Stap Two</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>

                                    </div>
                                </div>
                                <div className="card  items-center m-auto border ">
                                    {/* <div className=" bg-[url('https://i.ibb.co/c8hZjjn/Group-38667.jpg ')]" >
                                            <img className="items-center" src="https://i.ibb.co/c8hZjjn/Group-38667.jpg " alt="" />
                                            <div className="   ">1</div>
                                        </div> */}
                                    <div className="card-body bg-slate-300">
                                        <h1 className="text-center text-3xl font-bold bg-red-600 rounded-full w-10 h-10 m-auto"> 3</h1>
                                        <h2 className="card-title font-bold">Step Three</h2>
                                        <p>If a dog chews shoes whose shoes does he choose?</p>

                                    </div>
                                </div>

                            </div>
                            {/* Car Wash Steps to Process end */}

                        </div>
                        {/* left pard end  */}

                        {/* Right side services part */}
                        <div className="w-3/12 pr-5">
                            <div className="bg-slate-200 px-5 pb-3 run ">
                                <h1 className="text-black text-3xl  font-bold py-2">Services</h1>
                                <div className="  bg-yellow-600 my-3 shadow-lg">
                                    <h1 className=" font-bold py-2">Full Car Repair </h1>
                                </div>
                                <div className="  bg-slate-50 my-3 rounded ">
                                    <h1 className=" font-bold py-2">Engine Repair </h1>
                                </div>
                                <div className="  bg-slate-50 my-3 rounded ">
                                    <h1 className=" font-bold py-2">Automatic Service </h1>
                                </div>
                                <div className="  bg-slate-50 my-3 rounded ">
                                    <h1 className=" font-bold py-2">Engine Oile Change </h1>
                                </div>
                                <div className="  bg-slate-50 my-3 rounded ">
                                    <h1 className=" font-bold py-2">Battery Charge </h1>
                                </div>
                            </div>
                            {/* service part end */}
                            <div className="bg-black text-white px-5 pb-3 run ">
                                <h1 className=" text-3xl  font-bold py-2">Download</h1>
                                <div className="my-3 rounded ">
                                    <div className="flex items-center gap-1" >
                                        <div><FaFileAlt /></div>
                                        <div>
                                            <h1 className=" font-bold  ">Company Details </h1>
                                            <h1 className="   ">Dowanload </h1>
                                        </div>
                                        <div className="items-end bg-red-600 p-3 rounded" ><FaArrowRight /></div>
                                    </div>
                                    <div className="flex items-center gap-1 py-5" >
                                        <div><FaFileAlt /></div>
                                        <div>
                                            <h1 className=" font-bold  ">Company Details </h1>
                                            <h1 className="   ">Dowanload </h1>
                                        </div>
                                        <div className="items-end bg-red-600 p-3 rounded" ><FaArrowRight /></div>
                                    </div>

                                </div>

                            </div>
                            {/* Service offer stard */}
                            <div className="bg-black  text-center text-white px-5 py-3 mt-8 run ">
                                <img className="items-center" src="https://i.ibb.co/1m8hHh0/Group-1.png" alt="" />
                                <h1 className=" text-2xl font-bold py-2">Download</h1>
                                <h1>Need Help? We Are Here To Help You</h1>
                                <div className="bg-white p-5 rounded mt-4">
                                    <h1 className=" font-bold text-orange-800 "> Care Doctor <span className="text-black">Special</span> </h1>
                                    <h1 className=" text-black  ">Seve up to <span className="text-orange-800"> 60% off</span> </h1>
                                </div>

                            </div>
                            {/* Service price stard  */}
                            <div>
                                <h1 className="text-3xl font-bold py-5">Price $250.00</h1>
                                <div>
                                    <button className="btn border-t-pink-800 w-full font-bold text-3">Proceed Checkout</button>
                                </div>
                            </div>
                            {/* Right side services part */}





















                        </div>
                    </div>




                    {/* Hero part end */}


                </div>
                <footer className="footer p-10 bg-neutral text-neutral-content">
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </footer>
            </div>
        </>
    );
};

export default Home;