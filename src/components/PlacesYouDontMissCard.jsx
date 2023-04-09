import React from 'react'

function PlacesYouDontMissCard({img, title, location, required}) {
  return (
    
<div class="w-72 m-3 font-sans  bg-white border border-gray-200 rounded-lg shadow">
        <img class="w-full h-40" src={img} alt="" />
    <div class="p-3">
    <div className='my-4'>
        <p className='text-2xl font-bold'>{title}</p>
    </div>
    <div className='flex justify-between mb-5'>
<p><img className='inline h-6' src='https://cdn-icons-png.flaticon.com/512/535/535239.png' />{location}</p>
<p className='text-base text-green-600'>Recomended</p>
    </div>
    <hr />
       <div className='mt-4 flex justify-between'>
        <a href="#" class="font-sans items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
            Know more
        </a>
        <h5 class="text-red-500">{required}</h5>
       </div>
    </div>
</div>

  )
}

export default PlacesYouDontMissCard