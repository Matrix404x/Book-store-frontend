import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { FaRegEdit } from 'react-icons/fa'

function Settings() {
  return (
    <>
    <Adminheader />
    <div className="md:grid grid-cols-5 gap-2">
      <div className="col-span-1">
        <Adminsidebar />
      </div>
      <div className="col-span-4 p-6">
        <h1 className='text-3xl font-bold text-center my-5' >Settings</h1>
        <div className="md:grid md:grid-cols-2 gap-5 mx-5 items-center">
          <div>
            <p className='text-justify' > Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, magni. Vero eum ratione ea ex sed! Nobis a, dolorem excepturi voluptatem, totam hic ad molestiae ducimus sit eaque amet iure. Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur consequuntur aspernatur, consectetur porro repellendus eos dolor nisi est culpa repellat aut tempora ex sequi labore tenetur ullam a voluptatum expedita? </p>
            <p className='text-justify mt-5' > Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia laboriosam laudantium sint voluptate praesentium nam veniam quam dolorum blanditiis, nemo numquam sunt laborum aliquid itaque eum libero iusto facere commodi! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse nisi vel tempora quae asperiores. Deleniti iure porro, magnam provident iusto recusandae consequatur maxime nesciunt, consectetur nam pariatur enim soluta cum? </p>
          </div>
          <div className="rounded bg-blue-100 p-8 flex justify-center items-start flex-col mt-6 md:mt-0">
                <label htmlFor="adminPic" className='mb-3 relative inline-block'>
                  <img className='w-48 h-48 object-cover rounded-full' src="https://img.freepik.com/premium-vector/man-character_665280-46970.jpg" alt="admin profile"/>
                  <input type="file" name='' id='adminPic' className='hidden' />
                  <FaRegEdit className='absolute bottom-2 right-2 bg-yellow-400 p-2 text-white rounded cursor-pointer' />
                </label>
                <div className="mb-3 w-full mt-4">
                  <input type="text" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Username' />
                </div>
                <div className="mb-3 w-full">
                  <input type="password" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Password' />
                </div>
                <div className="mb-3 w-full">
                  <input type="password" className='p-2 bg-white border border-gray-200 text-black w-full rounded placeholder-gray-600' placeholder='Confirm Password'  />
                </div>
                <div className="my-3 w-full flex justify-evenly">
                  <button className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500' >RESET</button>
                  <button className='bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-500' >UPDATE</button>
                </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Settings
