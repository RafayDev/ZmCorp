"use client";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";
import NextLink from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const pathname = usePathname();

  return (
    <div className="">
      <nav className="fixed  top-0 left-0 right-0 p-1 w-full bg-transparent z-50">
        <div className="max-w-screen-xl bg-nav-color flex flex-wrap items-center justify-between mx-auto p-4">
          <NextLink
            href="https://www.zmcorp.com.pk"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/logo.png" className="h-10" alt="Zm-Corp Logo" />
          </NextLink>

          <div
            className="  w-full hidden  md:block md:w-auto"
            id="navbar-default"
          >
            <ul className=" font-medium  pl- md:p-0 mt-4 w-full flex flex-col md:flex-row  md:space-x-8 md:mt-0 md:border-0 ">
              <li id="Home">
                {pathname === '/' ? (
                  <ScrollLink
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                  >
                    Home
                  </ScrollLink>
                ) : (
                  <NextLink
                    href="/"
                    className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                    aria-current="page"
                  >
                    <span>Home</span>
                  </NextLink>
                )}
              </li>
              <li>
                {pathname !== "/" ? (
                  <NextLink
                    href="/area-of-expertise"
                    className="block py-2 px-3 hover:scale-110 duration-300 text-gray-600  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                    aria-current="page"
                  >
                    <span>Expertise</span>
                  </NextLink>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="Expertise"
                    spy={true}
                    smooth={true}
                    offset={-70}
                  >
                    Expertise
                  </ScrollLink>
                )}
              </li>
              <li>
                {pathname!== "/"? ( 
                <NextLink
                  href="services-we-offer"
                  className="block py-2 px-3 text-gray-600 hover:scale-110 duration-300  md:border-0 md:hover:text-li-color md:p-0  md:dark:hover:text-li-color "
                  aria-current="page"
                >
                  <span>Services</span>
                </NextLink>
                ) : (
               
                  <ScrollLink
                  activeClass="active"
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className=" hover:text-li-color    cursor-pointer"
                    aria-current="page"
                  >
                    SERVICES WE OFFER
                  </ScrollLink>
                )}
               
              </li>
              <li>
                {pathname!== "/"? (
                <NextLink
                  href="work-with-us"
                  className="block py-2 px-3 text-gray-600 hover:scale-110 duration-300 md:border-0 hover:text-li-color  md:hover:text-li-color md:p-0  md:dark:hover:text-li-color "
                  aria-current="page"
                >
                  <span>About</span>
                  </NextLink>
                ) : (
                  <ScrollLink
                    activeClass="active"
                    to="Wrok"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className=" hover:text-li-color    cursor-pointer"
                  >
                    WORK WITH US
                  </ScrollLink>
                )}
              </li>
              <li>
                {
                  pathname!== "/"? (
                    <NextLink
                      href="contact-us"
                      className="block py-2 px-3 text-gray-600 hover:scale-110 duration-300 md:border-0 hover:text-li-color  md:hover:text-li-color md:p-0  md:dark:hover:text-li-color "
                      aria-current="page"
                    >
                      <span>Contact</span>
                    </NextLink>
                  ) : (
                    <ScrollLink
                      activeClass="active"
                      to="contact"
                      smooth={true}
                      duration={500}
                      offset={-100}
                      className=" hover:text-li-color    cursor-pointer"
                    >
                      CONTACT US
                    </ScrollLink>
                  )
                }
               
              </li>
            </ul>
          </div>
          <div
            onClick={() => setNav(!nav)}
            className=" cursor-pointer p-r4 z-10 md:hidden "
          >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
          {nav && (
            <ul className="flex  text-gray-600 bg-nav-color   flex-col justify-center items-center space-y-4  w-full h-screen">
              <li>
                <div
                  className="px-2 cursor-pointer text-center text-2xl font-semibold "
                  aria-current="page"
                >
                  {pathname === '/'? (
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    activeClass="active"
                    to="home"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="    cursor-pointer"
                  >
                    HOME
                  </ScrollLink>
                  ) : (
                    <NextLink
                    onClick={() => setNav(!nav)}
                      href="/"
                      className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                      aria-current="page"
                    >
                      <span>Home</span>
                    </NextLink>
                  )}
                </div>
              </li>

              <li>

                <div
                  className="px-2 cursor-pointer text-center text-2xl font-semibold  "
                  aria-current="page"
                >
                  {pathname === '/'? (
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    to="Expertise"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="   cursor-pointer"
                  >
                    AREA OF EXPERTISE OFFER
                  </ScrollLink>
                  ) : (
                    <NextLink
                    onClick={() => setNav(!nav)}
                      href="/area-of-expertise"
                      className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                      aria-current="page"
                    >
                      <span>AREA OF EXPERTISE OFFER</span>
                    </NextLink>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="px-2 cursor-pointer text-center  text-2xl font-semibold "
                  aria-current="page"
                >
                  {pathname === '/'? (
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    activeClass="active"
                    to="services"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="   cursor-pointer"
                    aria-current="page"
                  >
                    SERVICES WE OFFER
                  </ScrollLink>
                  ) : (
                    <NextLink
                    onClick={() => setNav(!nav)}
                    href="/services-we-offer"
                    className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                    aria-current="page"
                  >
                    <span>SERVICES WE OFFER</span>
                  </NextLink>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="px-2 cursor-pointer text-center text-2xl font-semibold "
                  aria-current="page"
                >
                  {pathname === '/'? (
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    activeClass="active"
                    to="Wrok"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="   cursor-pointer"
                  >
                    WORK WITH US
                  </ScrollLink>
                  ) : (
                    <NextLink
                    onClick={() => setNav(!nav)}
                      href="/work-with-us"
                      className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                      aria-current="page"
                  >
                        <span>WORK WITH US</span>
                      </NextLink>
                  )}
                </div>
              </li>
              <li>
                <div
                  className="px-2 cursor-pointer text-center  text-2xl font-semibold  "
                  aria-current="page"
                >
                  {pathname === '/'? (
                  <ScrollLink
                    onClick={() => setNav(!nav)}
                    to="contact"
                    smooth={true}
                    duration={500}
                    offset={-100}
                    className="   cursor-pointer"
                  >
                    CONTACT US
                  </ScrollLink>
                  ) : (
                    <NextLink
                    onClick={() => setNav(!nav)}
                      href="/contact-us"
                      className="block py-2 px-3 hover:scale-110 duration-300 text-gray-800  md:hover:text-li-color md:p-0 md:dark:text-li-color"
                      aria-current="page"
                    >
                      <span>CONTACT US</span>
                    </NextLink>
                  )}
                </div>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
