import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'



function Navbar() {
    function navHandler() {
        let name = document.getElementById("navIcon");
        let list = document.querySelector('ul');
        name.name === 'menu'
            ?
            (name.name = "close", list.classList.add('top-[80px]'), list.classList.add('opacity-100')
            )
            :
            (name.name = "menu", list.classList.remove('top-[80px]'), list.classList.add('opacity-0')
            )
    }
    function navHandler2() {
        let name = document.getElementById("navIcon");
        let list = document.querySelector('ul');
        name.name === 'close'
            ?
            (name.name = "menu", list.classList.remove('top-[80px]'), list.classList.add('opacity-0')
            )
            :
            ""
    }
    return (
        <nav className=" shadow md:flex md:items-center p-5 bg-white md:justify-between">
            <div className='flex justify-between items-center'>
                <Link className='' to={"/"} onClick={navHandler2}><img width="67%" src='https://www.go2andaman.com/wp-content/uploads/2020/10/go2andaman.com_Logo-01.svg' /></Link>
                <div className='text-3xl cursor-pointer md:hidden'>
                    <ion-icon id="navIcon" name="menu" onClick={navHandler} ></ion-icon>
                </div>
            </div>

            <ul className='md:flex md:items-center z-[1] md:z-auto md:static absolute md:bg-white bg-gray-300 w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in'>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'>Plan Your Trip</Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'>Book Experiences</Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/ferrybooking"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'>Book Andaman Ferry</Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/blog"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'>Travel Blog</Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'>Contact Us</Link>
                </li>
                <li className='mx-4 my-6 md:my-0'>
                    <Link to={"/"} onClick={navHandler2} className='text-xl hover:text-cyan-400 duration-500'><FaSearch className='inline' /></Link>
                </li>
            </ul>
        </nav>)
}

export default Navbar