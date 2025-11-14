import React from 'react'
import { FaBarsProgress } from 'react-icons/fa6'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'

function Allbook() {
  return (<>
    <Header />

    <div className='flex justify-center items-center flex-col my-5'>
      <h1 className='text-3xl font-bold my-5'>collections</h1>
      <div className='flex my-5'>
        <input type="text"
          className='p-2 border border-gray-200 text-black w-100 placeholder-gray-600'
          placeholder='Search By Title' />
        <button className='bg-blue-900 text-white p-2'>Search</button>
      </div>

    </div>
    {/* grid */}
    <div className='md:grid grid-cols-4 md:px-20 p-5 mb-10'>
      {/* filter */}
      <div className='col-span-1'>
        <div className='flex justify-between'>
          <h1 className='text-2xl font-semibold'>Filter</h1>
          <button className='text-2xl md:hidden'><FaBarsProgress /></button>

        </div>
        <div className='md:block hidden'>
          <div className="mt-3">
            <input type="radio" />
            <label className='me-3'>
              category
            </label>
          </div>
          <div className="mt-3">
            <input type="radio" id='noFilter' name="filter" />
            <label className='ms-3'>
              No-Filter
            </label>
          </div>
        </div>
      </div>
      {/* books */}
      <div className='col-span-3'>
        <div className="md:gird grid-cols-4 mt-5 md:mt-0">
          <div className="shadow rounded p-3 mx-4 my-3">
            <img
              width={'100%'}
              height={'300px'}
              src="imageUrl"
              alt="book"
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <p className="text-blue-700 font-bold text-lg">book</p>
              <p>book</p>
              <Link to={'/all-books/:id/view'} className="bg-blue-800 p-2 text-white">View Book</Link>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>
  )
}

export default Allbook