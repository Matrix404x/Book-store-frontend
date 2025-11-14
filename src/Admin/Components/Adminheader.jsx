import React from 'react'

function Adminheader() {
  return (
    <>
      <div className="flex justify-between items-center p-3 md:px-20">
        <div className="flex items-center">
                    <img width={"50px"} height={"50px"} src="https://imgs.search.brave.com/Ur7ILV8FFP8vuPU-h-2Oro9rT87GwO33MxYB8qrofsk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L2Jvb2stcG5nL29w/ZW5lZC1ib29rLWlt/YWdlLXRyYW5zcGFy/ZW50LXBuZy0xOC5w/bmc" alt="logo" />
                    <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
                </div>

                {/* logout */}
           <button className='border border-black rounded px-3 py-2 ms-3 hover:bg-black hover:text-white'>
            {" "}
            Logout{" "}
           </button>
      </div>
      <div className="w-full p-3 bg-black text-white">
        <marquee>Welcome, Admin! You Are All Set To Manage And Monitor The System. Let's Work!</marquee>
      </div>
    </>
  )
}

export default Adminheader