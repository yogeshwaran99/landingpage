import {FaFacebook, FaInstagram, FaSlack} from "react-icons/fa";
import logo from "./../assets/logo.png";
import {FaX} from "react-icons/fa6";

function Contact() {

  return (
    <section id="contact">
      <div className="bg-stone-300 px-4 pb-12 pt-4 md:pt-12 md:px-12 dark:bg-neutral-900">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0">
          <img src={logo} alt="logo" height="80" width="80" className="md:self-start" />
          <div className="flex w-full justify-around gap-6 md:w-1/2">
            <ul className="flex flex-col gap-4">
              <li className="font-bold dark:text-stone-100">Ecosystem</li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100" >Documentation</li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">Tools & Equipment</li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">onstruction Services</li>
            </ul>
            <ul className="flex flex-col gap-4">
              <li className="font-bold dark:text-stone-100">Company</li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">About us </li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">Blog</li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">Careers<span className="bg-orange-500 text-white rounded-lg ml-2 px-2 py-1 text-xs">We're hiring!</span> </li>
              <li className="text-stone-500 hover:cursor-pointer hover:text-stone-600 dark:text-stone-400 dark:hover:text-stone-100">Customers</li>
            </ul>
          </div>
          <div className="md:ml-10">
            <h3 className="font-bold dark:text-stone-100"> Stay up to date </h3>
            <div className="flex flex-col py-4 gap-3 items-center md:flex-row md:w-lg">
              <input type="email" className="bg-white rounded-lg p-2 w-full md:w-4/5 focus:outline-sky-700 focus:outline" placeholder="Enter your email " />
              <button className="bg-orange-500 text-white p-2 rounded-lg w-full md:w-1/3 hover:cursor-pointer hover:bg-orange-600">Subscribe</button>
            </div>
            <p className="text-stone-500 text-sm pt-4 dark:text-stone-300"> Stay updated with the latest tools and exclusive deals. </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between">
          <p className="text-stone-500 text-sm text-center pt-4 dark:text-stone-100">&copy; 2025 ScrewFast</p>
          <div className="flex gap-8 pt-8 dark:text-stone-400">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl dark:hover:text-stone-100">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl dark:hover:text-stone-100">
              <FaInstagram />
            </a>
            <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl dark:hover:text-stone-100">
              <FaX />
            </a>
            <a href="https://www.slack.com" target="_blank" rel="noopener noreferrer" className="text-base md:text-xl dark:hover:text-stone-100">
              <FaSlack />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
