import React from 'react'
import Header from '../Components/Header'
import Footer from '../../Components/Footer'
import { Link } from 'react-router-dom'
import { IoChevronBackCircle } from 'react-icons/io5'
import { FaEye } from 'react-icons/fa'

function Viewbook() {
  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4 gap-x-10">
            <div className="col-span-1">
              <img className='w-full' src="imageUrl" alt="book" />
            </div>
            <div className="col-span-3">
              <div className="flex justify-between mt-5 md:mt-0">
                <h1 className='text-xl font-bold' >title</h1>
                <button className='text-gray-400' > <FaEye /> </button>
              </div>
              <p className='my-3 text-blue-700' >author</p>
              <div className="md:grid grid-cols-3 gap-5 my-10">
                <p className='font-bold' >Publisher : publisher</p>
                <p className='font-bold' >Language : language</p>
                <p className='font-bold' >No. of Pages : noOfPages</p>
                <p className='font-bold' >Seller Mail : userMail</p>
                <p className='font-bold' >Real Price : $525</p>
                <p className='font-bold' >ISBN : isbn</p>
                <p className='font-bold' >Category : category</p>
              </div>
              <div className="md:my-10 my-4">
                <p className='font-bold text-lg' >abstract</p>
              </div>
              <div className="flex justify-end">
                <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'><IoChevronBackCircle className='me-3' /> Back </Link>
                <button className='bg-green-900 text-white p-2 ms-5 rounded' >Buy $455</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Viewbook
