import { FaGoogle, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div className="  w-96 ">
                    <img className="" src="https://i.ibb.co/xYPkgKw/Group-1-removebg-preview.png" alt="" />
                    <h1 className="text-3xl font-bold">Car Doctor</h1>
                    <p className="font-bold">Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>
                    <div className="flex gap-3 text-3xl px-10">
                        <a href="http://"><FaGoogle /></a>
                        <a href="http://"><FaTwitter /></a>
                        <a href="http://"><FaInstagram /></a>
                        <a href="http://"><FaLinkedin /></a>
                    </div>
                </div>
                <nav className="    ">
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="    ">
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="    ">
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;