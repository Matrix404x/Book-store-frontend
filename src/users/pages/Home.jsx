import React from 'react'
import Header from '../Components/Header'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <Header/>
        {/* landing */}
        <div style={{height:'500px'}} className="flex flex-col justify-center items-center bg-[url(https://fortbragglibrary.org/wp-content/uploads/2017/12/Book-banner.jpg)] bg-cover bg-center text-white">
        <div style={{height:'500px',backgroundColor:'rgba(0,0,0,0.5'}} className='w-full flex flex-col justify-center items-center'>
          <h1 className='text-5xl font-bold'>Wonderful Gifts</h1>
          <p>Give your family and friends a book</p>
          <div className="mt-9 flex">
            <input type="text" placeholder='Search Books' className='bg-white p-2 rounded-3xl placeholder-gray-500 w-100 text-black' />
            <FaSearch className='text-gray-500 ' style={{margin:'10px',fontSize:'30px'}} />
          </div>
        </div>
        </div>
        {/* new arrivals*/}
        <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
          <h1 className='text-2xl font-bold'>NEW ARRIVAL</h1>
          <h1 className='text-3xl'>Explore Our Latest Collections</h1>
          <div className='md:grid grid-cols-4 w-full my-10'>

            <div className="shadow rounded p-3 mx-4">
              <img width={'100%'} height={'300px'}  src="img" alt="books" />
              <div className="flex flex-col justify-center items-center mt-4">
                <p className='text-blue-700 font-bold text-lg'>author</p>
                <p>booktitle</p>
                <p>discountPrice</p>
              </div>
            </div>

          </div>
          <div className="text-center my-10">
            <Link to={'/all-books'} className='bg-blue-800 p-3 text-white font-bold'>Explore More...</Link>
          </div>
          
        </section>
        {/* author*/}

        <section className='md:grid grid-cols-2 items-center gap-10 my-5 md:px-40 p-5 '>
          <div className="text-center">
            <h1 className='text-lg font-medium'>FEATURED AUTHOR</h1>
            <h2 className='text-xl'>Captivates with every word</h2>
            <p className='text-justify my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore vero ea veritatis laudantium saepe fuga fugiat, tempora reiciendis, alias quis quaerat veniam repellendus iusto beatae pariatur harum architecto facilis itaque!
            Expedita autem laborum ipsa alias veritatis iste, velit numquam labore vero unde ullam distinctio est fugiat voluptatum ratione porro magni tempore eaque dolore eius cupiditate ex quo ab id. Hic.</p>
            <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur, minus architecto iste amet accusantium quibusdam eius at explicabo consequatur ab ipsum qui dolor! Voluptate nihil sit temporibus sapiente optio aperiam.
            Deleniti sed voluptate corrupti quo commodi temporibus nobis ducimus corporis assumenda nostrum asperiores atque officiis aliquam non placeat vel eveniet eaque, repellat, exercitationem sit sapiente harum. Earum assumenda magnam animi!
            Minima, cum. Quaerat reiciendis pariatur doloremque voluptatum sint nesciunt praesentium et maiores nisi quo, nemo aperiam ea harum illo, nulla omnis exercitationem consequuntur voluptates eligendi iure non? Dolore, repudiandae deserunt.</p>

          </div>
          <div className="p-5 flex justify-center items-center">
            <img src="https://imgs.search.brave.com/sh8S9d8XkTOjcvkt8Rlba16YcwtiUwjquYELJPn6CLo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/OTczMzAzNi9waG90/by9vbmUtc3Bhbmlz/aC1zZW5pb3ItbWFu/LWhlYWRzaG90LXBv/cnRyYWl0LXNtaWxp/bmctYXQtdGhlLWNh/bWVyYS5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dFEyVWgz/N0llRjJfS2tLenNa/LXIzMVpvT3ZScWFt/QWZGXzh3cjluZWNz/VT0" alt="" />
          </div>
           
        </section>
    </div>
  )
}

export default Home