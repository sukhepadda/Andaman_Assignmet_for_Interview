import React from 'react'

function CustomHomeCard({ title, para, img }) {
  return (

    <div className="md:w-60 w-full h-64 left-0 md:m-4 p-4 font-sans bg-white border border-gray-200 shadow">
      <div className='mt-1 flex justify-between'>
        <h6 className="mb-2 text-2xl font-semibold font-sans tracking-tight text-gray-900">{title}</h6>
        <img className='h-12' src={img} alt="" />
      </div>
      <p classNamev="font-normal text-2xl mt-5 text-gray-700 dark:text-gray-400">{para}</p>
      <button class="inline-flex items-center justify-center p-0.5 mt-6 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="px-8 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Explore
        </span>
      </button>
    </div>

  )
}

export default CustomHomeCard