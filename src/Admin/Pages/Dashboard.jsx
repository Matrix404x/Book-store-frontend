import React from 'react'
import Adminheader from '../Components/Adminheader'
import Adminsidebar from '../Components/Adminsidebar'

function Dashboard() {
  return (
    <div>
        <Adminheader />
        <div className="md:grid grid-cols-5 gap-2">
          <div className="col-span-1">
        <Adminsidebar />
          </div>
          <div className="col-span-4 p-10">
            
          </div>
        </div>

    </div>
  )
}

export default Dashboard
