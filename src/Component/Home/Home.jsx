import { FaLongArrowAltRight, FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="hero  w-full min-h-72" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content   text-neutral-content">
                    <div className=" justify-start">
                        <h1 className="mb-5 text-5xl font-bold">Affordable Price For Car Servicing</h1>
                        <p className="mb-5">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-primary">Discover More</button>
                        <button className="btn btn-outline ml-5">Latest Project</button>
                    </div>
                </div>
            </div>

            {/* about part stard */}
            <div className="hero text-black  ">
                <div className="hero-content flex-col lg:flex-row">

                    <div className="flex-1">
                        <div className="absolute ">
                            <img src="https://i.ibb.co/3FJ85YX/Rectangle-4.png " className="max-w-sm rounded-lg shadow-2xl" />
                        </div>

                        <div className=" relative ml-28 mt-48 " >
                            <img src="https://i.ibb.co/wQXV4kG/Rectangle-5.png" className="max-w-sm rounded-lg shadow-2xl" />
                        </div>
                    </div>
                    <div className="flex-1 font-bold">
                        <h1 className="text-2xl py-5 text-yellow-700">About Us</h1>
                        <h1 className="text-5xl ">We are qualified & of experience in this field</h1>
                        <p className="pt-6 ">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get More Info</button>
                    </div>
                </div>
            </div>
            {/* about part end */}
            {/* Service part Stard */}
            {/* services Head part */}
            <div className="text-center font-bold py-10">
                <h3 className="text-2xl text-yellow-900 py-4">Services</h3>
                <h1 className="text-4xl text-black ">Our Services Area</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or  </p>
                <p>randomised words which don't look even slightly believable.</p>
            </div>
            {/* services Head part */}
            <div className="py-10">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Electricol System</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/tPJW0ND/2.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Engine Diagnostics</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/3CPmNbQ/3.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Engine Diagnostics</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r5C9cBp/4.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Auto Car Repair</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/BNk9MmH/5.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Engine Diagnostics</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/Gcvd37W/6.png" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl">Auto Car Repair</h2>
                            <div className="flex text-3xl ">
                                <p className="text-sky-900">Price: $20.00   </p>
                                <FaLongArrowAltRight />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center py-10">
                    <button className="btn btn-outline text-yellow-700 text-2xl font-bold ">More services</button>
                </div>
            </div>

            {/* Service part end */}

            {/* location part stard */}
            <div className="stats shadow text-center items-center w-full py-10 text-white mb-10">

                <div className="stat">
                    <div className="stat-figure text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                    </div>
                    <div className="stat-title">We Are open monday-friday</div>
                    <div className="stat-value text-primary">7:00am - 9:00 pm</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                    </div>
                    <div className="stat-title">Have a Question ?</div>
                    <div className="stat-value text-secondary">+2546 251 2658</div>
                    <div className="stat-desc">21% more than last month</div>
                </div>

                <div className="stat">
                    <div className="stat-figure text-secondary">
                        <div className="avatar online">
                            <div className="w-16 rounded-full">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="stat-value">Need a repair? our Address</div>
                    <div className="stat-title">Liza Street, New York</div>
                </div>

            </div>
            {/* location part end */}

            {/* Browser our Product part stard  */}
            {/* services Head part */}
            <div className="text-center font-bold py-10">
                <h3 className="text-2xl text-yellow-900 py-4">Popular Products</h3>
                <h1 className="text-4xl text-black ">Browse Our Products</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or  </p>
                <p>randomised words which don't look even slightly believable.</p>
            </div>
            {/* services Head part */}
            <div className="py-10">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Car Engine Plug</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Car Air Filter</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Cools led light</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Car Haidrolic brak</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Car Taiyar</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>
                    <div className="card shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/r6cYBp2/1.png" alt="Shoes" /></figure>
                        <div className="items-center card-body font-bold">
                            <div className="rating ">
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            </div>
                            <h2 className="  font-bold text-5xl py-5">Car Battery</h2>
                            <p className="text-sky-900 text-5xl">Price: $20.00   </p>
                        </div>
                    </div>

                </div>

                <div className="text-center py-10">
                    <button className="btn btn-outline text-yellow-700 text-2xl font-bold ">More services</button>
                </div>
            </div>
            {/* Browser our Product part end */}

            {/* Meet our team stard  */}
            {/* services Head part */}
            <div className="text-center font-bold py-10">
                <h3 className="text-2xl text-yellow-900 py-4">Team</h3>
                <h1 className="text-4xl text-black ">Meet Our Team</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or  </p>
                <p>randomised words which don't look even slightly believable.</p>
            </div>
            {/* services Head part */}
            <div className="py-10">
                <div className="grid grid-rows grid-flow-col gap-4">
                    <div className="card  shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/xhqjvjk/Rectnjangle-7.png" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <h2 className="card-title text-3xl">Electricol System</h2>
                            <p className="text-sky-900"> Enginer Expart   </p>
                            <div className="flex text-4xl gap-4  ">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/F6NpZ1J/Rectangleg-7.png" alt="Shoes" /></figure>
                        <div className="card-body items-center text-black">
                            <h2 className="card-title text-3xl">Electricol System</h2>
                            <p className="text-sky-900"> Enginer Expart   </p>
                            <div className="flex text-4xl gap-4  ">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className="w-full" src="https://i.ibb.co/y5vkTfF/Rectangle-7.png" alt="Shoes" /></figure>
                        <div className="card-body items-center text-black">
                            <h2 className="card-title text-3xl">Electricol System</h2>
                            <p className="text-sky-900"> Enginer Expart   </p>
                            <div className="flex text-4xl gap-4   ">
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaLinkedin />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Service part end */}
            {/* Meet our team stard  */}


            {/* why Choose us part stard */}
            {/* services Head part */}
            <div className="text-center font-bold py-10">
                <h3 className="text-2xl text-yellow-900 py-4">Core Features</h3>
                <h1 className="text-4xl text-black ">Why Choose Us</h1>
                <p>the majority have suffered alteration in some form, by injected humour, or  </p>
                <p>randomised words which don't look even slightly believable.</p>
            </div>
            {/* services Head part */}
            <div className="py-10">
                <div className="grid grid-rows grid-flow-col gap-4">
                    <div className="card  shadow-xl">
                        <figure><img className=" pt-8" src="https://i.ibb.co/cr2SwLC/Group-38731.png" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> Expert Team   </p>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className=" pt-8" src="https://i.ibb.co/x6zkhx1/Group-71.jpg" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> Timely Delivery   </p>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className=" pt-8" src="https://i.ibb.co/gRbfsMH/Group.jpg" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> 24/7 Support   </p>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className=" pt-8" src="https://i.ibb.co/wsGHj4X/Wrench.jpg" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> Best Equipment   </p>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className=" pt-8" src="https://i.ibb.co/hfZYbtH/Group-38730.jpg" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> 100% Guranty   </p>
                        </div>
                    </div>
                    <div className="card  shadow-xl">
                        <figure><img className="pt-8" src="https://i.ibb.co/cr2SwLC/Group-38731.png" alt="Shoes" /></figure>
                        <div className="card-body  items-center text-black">
                            <p className="font-bold text-2xl"> Market Guranty  </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Service part end */}

            {/* why Choose us part end */}


            {/* What Customer Testimonial part stard   */}
            {/* services Head part */}
            <div className="text-center font-bold py-10">
                <h3 className="text-2xl text-yellow-900 py-4">Testimonial</h3>
                <h1 className="text-4xl text-black ">What Customer</h1>
                <div className="py-4">
                    <p>the majority have suffered alteration in some form, by injected humour, or  </p>
                    <p>randomised words which don't look even slightly believable.</p>
                </div>
            </div>
            {/* services Head part */}
            <div className="py-10">
                <div className="grid  grid-flow-col gap-4">
                    <div className="card  shadow-xl">
                        <div className="card-body p-10 text-black ">
                            <div className=" flex items-center   ">
                                <div>
                                    <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/18x4Zjy/r.jpg" alt="" />
                                </div>
                                <div className="pl-10">
                                    <h1 className="font-bold text-2xl"> Obaydul Kuasha   </h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <p className="text-black pb-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ducimus exercitationem fugit, vel alias nemo sunt rem at ratione corrupti ipsa rerum ab dolore error voluptatem magnam sequi temporibus non iusto recusandae dolorem, iure fuga. Numquam rem accusantium dolorum accusamus delectus asperiores soluta corrupti, recusandae velit iure, quas atque voluptates.</p>
                        </div>

                    </div>
                    <div className="card  shadow-xl">
                        <div className="card-body p-10 text-black ">
                            <div className=" flex items-center   ">
                                <div>
                                    <img className="w-20 h-20 rounded-full" src="https://i.ibb.co/vvJvXJr/personal-02.jpg" alt="" />
                                </div>
                                <div className="pl-10">
                                    <h1 className="font-bold text-2xl"> Tayfur Sorder</h1>
                                    <p>Businessman</p>
                                </div>
                            </div>
                            <p className="text-black pb-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo ducimus exercitationem fugit, vel alias nemo sunt rem at ratione corrupti ipsa rerum ab dolore error voluptatem magnam sequi temporibus non iusto recusandae dolorem, iure fuga. Numquam rem accusantium dolorum accusamus delectus asperiores soluta corrupti, recusandae velit iure, quas atque voluptates.</p>
                        </div>

                    </div>
                </div>
            </div>
            {/* Service part end */}
            {/* What Customer Testimonial part end  */}
































        </>
    );
};

export default Home;