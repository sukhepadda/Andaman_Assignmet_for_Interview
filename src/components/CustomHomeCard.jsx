import React from 'react'

function CustomHomeCard({ title, para }) {
  return (

    <div className="w-full left-0 m-4 p-4 bg-white border border-gray-200 rounded-lg shadow">
      <div className='mt-4'>
        <h6 className="mb-2 text-4xl font-sans tracking-tight text-gray-900">{title}</h6>

      </div>
      <p classNamev="font-normal text-2xl mt-5 text-gray-700 dark:text-gray-400">{para}</p>
      <button class="relative inline-flex items-center justify-center p-0.5 mt-6 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span class="relative px-8 py-1.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
          Explore
        </span>
      </button>
    </div>

  )
}

export default CustomHomeCard