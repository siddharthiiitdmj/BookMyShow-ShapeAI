import React from "react";
import { BiSearch, BiChevronDown, BiMenu } from "react-icons/bi";

function Navsm() {
    return (
        <>
            <div className='text-white flex items-center justify-between'>
                <div>
                    <h3 className='text-xl text-bold'>It All Starts Here!</h3>
                    <span className="text-gray-400 text-xs flex items-center">
                        Jhansi, U.P. <BiChevronDown />
                    </span>
                </div>
                <BiSearch className='text-2xl'/>
            </div>
        </>
    );
}

function Navmdlg() {
    return (
        <>
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex w-1/2 gap-3 items-center justify-between">
                    <div className="w-1/4 h-10">
                        <img
                            src='https://png2.cleanpng.com/sh/c6931d67db2330c48ac32f86dc9e0730/L0KzQYm3VMA3N5Zqj5H0aYP2gLBuTfJwd5xykeVxb4ewhrr6gftpaaFmjNDqbT33ebTyhgQua5DyiNN3eT3mf8b3jB4ue5l0jAU2NXHmR7S5hMgyPJc3SaM3MUO5QoOAUsMyPWM4SKY5OUi3QIm8WL5xdpg=/kisspng-bookmyshow-visakhapatnam-ticket-company-coupon-shows-5ac7c2d814f211.1362272315230409840858.png'
                            alt="logo"
                            className="w-full h-full cursor-pointer"
                        />
                    </div>
                    <div className="w-full flex items-center gap-3 bg-white px-3 py-1 rounded-lg">
                        <BiSearch />
                        <input
                            type="search"
                            name="searchbox"
                            placeholder="Search for Movies, Events, Plays, Sports and Activities"
                            className="w-full outline-none bg-transparent"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-gray-400 text-base flex items-center cursor-pointer hover:text-white">
                        Jhansi, U.P. <BiChevronDown />
                    </span>
                    <button className="bg-red-600 text-white border-4 font-bold border-red-600 rounded-md px-2 py-1 hover:bg-white hover:text-red-600">
                        Sign-In
                    </button>
                    <BiMenu className='ml-3 text-3xl text-white cursor-pointer' />
                </div>
            </div>
        </>
    );
}

function Navbar() {
    return (
        <>
            <nav className="bg-darkback-700 py-3">
                {/* Mobile view */}
                <div className="md:hidden px-4">
                    <Navsm />
                </div>

                {/* Tab and laptop view */}
                <div className="hidden md:flex w-full">
                    <Navmdlg />
                </div>
            </nav>
        </>
    );
}

export default Navbar;
