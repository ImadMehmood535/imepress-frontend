import { LuPhoneIncoming } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPinterestP,
  FaFacebookF,
} from "react-icons/fa";
import React from "react";
import { Link } from "react-router-dom";
import { Footer_Logo, payment_methods } from "../../assets";

const Footer = () => {
  return (
    <div className="footer border-t-1 border-[#E5E5E5]">
      <div className="container xl:w-[80%] mx-auto">
        <footer className=" text-start text-neutral-600 lg:text-left ">
          <div className="mx-6 py-10 text-left  dark:border-neutral-500 lg:justify-between">
            <div className="grid-1 grid gap-8 md:grid-cols-5 lg:grid-cols-5">
              <div className="">
                <div className="w-full max-w-[150px] ">
                  <Link to="home" className="cursor-pointer">
                    <img
                      src={Footer_Logo}
                      alt="Header_logo"
                      width={500}
                      height={500}
                      className=" w-full md:max-w-[80%] mb-5 md:mb-9"
                    />
                  </Link>
                </div>
                <div className="flex justify-start ">
                  <Link to={"/"} className="mr-6 cursor-pointer" target="_blank">
                    <FaFacebookF className="fill-[#121212] hover:fill-[#ecca63]" />
                  </Link>
                  <Link to={"/"} className="mr-6 cursor-pointer" target="_blank">
                    <FaInstagram className="fill-[#121212] hover:fill-[#ecca63]" />
                  </Link>
                  <Link to={"/"} className="mr-6 cursor-pointer" target="_blank">
                    <FaYoutube className="fill-[#121212] hover:fill-[#ecca63]" />
                  </Link>
                  <Link to={"/"} className="mr-6 cursor-pointer" target="_blank">
                    <FaTwitter className="fill-[#121212] hover:fill-[#ecca63]" />
                  </Link>
                  <Link to={"/"} className="mr-6 cursor-pointer" target="_blank">
                    <FaPinterestP className="fill-[#121212] hover:fill-[#ecca63]" />
                  </Link>
                </div>
              </div>
              <div className="">
                <h6 className="mb-4 flex  font-semibold  justify-start">
                  Collection
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link to="/">Clothing</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Footwear</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Cosmetics</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Electronics</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Jewelry & Watches</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Luxury Vehicles</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="">
                <h6 className="mb-4 flex  font-semibold  justify-start">
                  Quick Links
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link to="/">Career at Gougi</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">About Gougi</Link>{" "}
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Gift Cards</Link>{" "}
                  </li>
                  <li>
                    <Link to="/blogs">Blog</Link>{" "}
                  </li>
                </ul>
              </div>

              <div className="">
                <h6 className="mb-4 flex  font-semibold  justify-start">
                  Need Help
                </h6>
                <ul className="text-[#616161] space-y-2 text-sm">
                  <li>
                    <Link to="/">Order Status</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Shipping & Delivery</Link>{" "}
                  </li>
                  <li>
                    <Link to="/faq">FAQ & Helps</Link>{" "}
                  </li>
                  <li>
                    <Link to="/teem-&-conditions">Terms & Conditions</Link>{" "}
                  </li>
                  <li>
                    <Link to="/">Legal & Privacy</Link>{" "}
                  </li>
                </ul>
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <h6 className="mb-4 flex   font-semibold uppercase justify-start">
                  Exclusive Services
                </h6>
                <p className="mb-4 flex items-center justify-start space-x-2 text-[#616161]">
                  <LuPhoneIncoming className="text-base" />
                  <span className="">
                    {" "}
                    <Link to="tel:+1 666 8888" className="text-base">
                      {" "}
                      Call Us: +1 666 8888{" "}
                    </Link>
                  </span>
                </p>
                <p className="mb-4 flex items-center justify-start space-x-2 text-[#616161]">
                  <MdOutlineMail className="text-base" />
                  <span className="">
                    <Link to="maito:" className="text-base">
                      Send us an email
                    </Link>
                  </span>
                </p>
                <p className="mb-4 flex items-center justify-start space-x-2 text-[#616161]">
                  <HiOutlineLocationMarker className="text-base" />
                  <span className="">
                    <Link to="/" className="text-base">
                      {" "}
                      See our stores{" "}
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div className="flex items-center md:justify-between justify-center  p-6 ">
            <div className="mr-12 hidden lg:block">
              <span>
                © 2024 <strong>Imepress Gold</strong>. All Rights Reserved.
              </span>
            </div>

            <div className="flex justify-center">
              <img
                src={payment_methods}
                alt="payment_methods"
                width={200}
                height={50}
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
