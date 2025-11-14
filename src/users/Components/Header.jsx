import React, { useState } from 'react'
import { CiTwitter, CiUser } from 'react-icons/ci'
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import { FaBarsProgress } from 'react-icons/fa6'
import { Link } from 'react-router-dom'


function Header() {
    const [listStatus,setListStatus] = useState(false)
    return (
        <>
            <div className='grid grid-cols-3 p-3'>
                {/**logo */}
                <div className="flex items-center">
                    <img width={"50px"} height={"50px"} src="https://imgs.search.brave.com/Ur7ILV8FFP8vuPU-h-2Oro9rT87GwO33MxYB8qrofsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2Jvb2stcG5nL29w/ZW5lZC1ib29rLWlt/YWdlLXRyYW5zcGFy/ZW50LXBuZy0xOC5w/bmc" alt="logo" />
                    <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
                </div>
                {/**title */}
                <div className="md:flex justify-center items-center hidden">
                    <h1 className='text-3xl font-bold'>BOOKSTORE</h1>

                </div>
                {/**login block */}
                <div className="md:flex justify-end items-center hidden">
                    <FaInstagram />
                    <CiTwitter />
                    <FaFacebookF />
                    {/**login link */}
                    <Link to={"/login"}>
                        <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
                            {" "}
                            <CiUser />Login{" "}
                        </button>
                    </Link>

                    <div className="relative inline-block text-left">
                        <button className='w-full bg-white px-3 py-2 shadow-xs hover:bg-gray-50'>
                            <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} className='mx-2' src="" alt="user" />
                        </button>
                        <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                            <div className="py-1">
                                <Link className='block px-4 py-2 text-sm text-gray-700' to={'/profile'}>Profile</Link>
                                <button className='block px-4 py-2 text-sm text-gray-700'>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center'>
                {/*  menubar & login*/}
                <div className="flex justify-between items-center text-2xl md:hidden">
                    <button onClick={()=>setListStatus(!listStatus)}><FaBarsProgress /></button>
                    {/* login link */}
                    <Link to={"/login"}>
                        <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
                            {" "}
                            <CiUser /> Login{" "}
                        </button>
                    </Link>
                    <div className="relative inline-block text-left">
                        <button className='w-full px-3 py-2 bg-gray-500 shadow-xs hover:bg-gray-50 rounded'>
                            <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }}
                                className='mx-2' src="https://imgs.search.brave.com/tpVlXr08OyEtv2KUA75JaQHjRFgjwWwOgdCCmTySwwM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMjAv/OTExLzc0OC9zbWFs/bC91c2VyLXByb2Zp/bGUtaWNvbi1wcm9m/aWxlLWF2YXRhci11/c2VyLWljb24tbWFs/ZS1pY29uLWZhY2Ut/aWNvbi1wcm9maWxl/LWljb24tZnJlZS1w/bmcucG5n" alt="user" />
                        </button>
                        <div className="absollute rigth-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden">
                            <div className="py-1">
                                <Link className='block px-4 py-2 text-sm text-gray-700' to={'/porfile'} >
                                    Profile</Link>
                                <button className='block px-4 py-2 text-sm text-gray-700' >Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className={listStatus?'flex flex-col':'md:flex justify-center items-center hidden'}>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/'}>HOME</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/all-book'}>BOOKS</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/careers'}>CAREERS</Link></li>
                    <li className='md:mx-4 mt-3 md:mt-0'><Link to={'/contact'}>CONTACT</Link></li>
                </ul>
            </nav>

        </>
    )
}

export default Header