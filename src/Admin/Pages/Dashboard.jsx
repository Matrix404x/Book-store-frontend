import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'
import { PiBookOpenTextBold } from 'react-icons/pi'
import { CiUser } from 'react-icons/ci'

function Dashboard() {
  return (
    <div>
      <Adminheader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <Adminsidebar />
        </div>
        <div className="col-span-4 p-10">
          <div className="md:grid md:grid-cols-3 gap-4">
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-blue-900 p-4 flex items-center rounded text-white">
                <PiBookOpenTextBold className="text-5xl mr-4" />

                <div className="text-left ml-4 md:ml-0">
                  <h3 className='text-xl'>Total Number of Books</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-green-900 p-4 flex items-center rounded text-white">
                <CiUser className="text-5xl mr-4" />
                <div className="text-left ml-4 md:ml-0">
                  <h3 className='text-xl'>Total Number of Users</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-700 p-4 flex items-center rounded text-white">
                <CiUser className="text-5xl mr-4" />
                <div className="text-left ml-4 md:ml-0">
                  <h3 className='text-xl'>Total Number of Employees</h3>
                  <h3 className='text-4xl'>100+</h3>
                </div>
              </div>
            </div>
          </div>

          <div className="md:grid md:grid-cols-2 gap-6 p-5 mt-10">
            <div className="my-5 md:my-0 bg-white rounded shadow p-4 h-80 flex items-center justify-center">
              bar chart
            </div>
            <div className="my-5 md:my-0 bg-white rounded shadow p-4 w-full h-80 flex items-center justify-center">
              pie chart
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
