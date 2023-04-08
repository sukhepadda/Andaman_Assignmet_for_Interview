import React from 'react'

function BookFerry() {
  return (
    <div className='mx-10 mt-5 grid md:grid-cols-2'>
      <div className="font-[Poppins]">
        <h1 className='text-4xl font-bold'>Book Your Andaman Ferry</h1>
        <div className="bg-white m-5 pt-2 px-4 md:grid grid-cols-3">
          <p className='text-gray-500 text-lg'>Select Passenger</p>
          <div className='text-center grid grid-cols-2 col-span-2'>
            <div>

              <p className='text-gray-400 text-start m-2 block text-base'>Adult(Above 1year)</p>
              <button className='w-14 bg-[#eee8e8] border text-2xl font-black ' >-</button>
              <input className='w-14 text-center border text-2xl ' type="text" name="adultTextBox" id="" value={1} />
              <button className='w-14 bg-[#eee8e8] border text-2xl font-black  ' >+</button>
            </div>
            <div>
              <p className='text-gray-400 text-start m-2  block text-base'>Infant(below 12)</p>
              <button className='w-14 bg-[#eee8e8] border text-2xl font-black ' >-</button>
              <input className='w-14 text-center border text-2xl ' type="text" name="adultTextBox" id="" value={0} />
              <button className='w-14 bg-[#eee8e8] border text-2xl font-black  ' >+</button>
            </div>
          </div>
          s
          <hr class="w-full h-0.5 mx-auto bg-gray-100 md:my-10" />
        </div>
      </div>





      <div className="">adf</div>
    </div>
  )
}

export default BookFerry