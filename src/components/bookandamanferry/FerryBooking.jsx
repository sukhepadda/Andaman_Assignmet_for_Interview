import React, { useEffect, useState } from 'react'

function BookFerry() {
  const [infantValue, setInfantValue] = useState(0)
  const [adultValue, setAdultValue] = useState(1)

  const plusBtn = () => (
    setAdultValue(adultValue + 1)
  )
  const minusBtn = () => (
    adultValue === 1 ? "" : setAdultValue(adultValue - 1)
  )
  const plusBtn2 = () => (
    setInfantValue(infantValue + 1)
  )
  const minusBtn2 = () => (
    infantValue === 0 ? "" : setInfantValue(infantValue - 1)
  )
  return (
    <div className='md:mx-10 mt-5 grid md:grid-cols-2'>
      <div className="font-[Poppins] ">
        <h1 className='text-4xl font-bold'>Book Your Andaman Ferry</h1>
        <div className='bg-white mt-8 mb-20 p-5 w-full'>
          <div className="pt-2 px-4 md:grid grid-cols-3">
            <div className=''>
              <p className='text-gray-500 text-lg'>Select Passenger</p>
            </div>
            <div className='text-center grid grid-cols-2 col-span-2'>
              <div>
                <p className='text-gray-400 text-start m-2 block text-base'>Adult(Above 1year)</p>
                <button className='w-14 bg-[#eee8e8] border text-2xl font-black' onClick={minusBtn} >-</button>
                <input className='w-14 text-center border text-2xl ' type="text" name="adultTextBox" id="" value={adultValue} />
                <button className='w-14 bg-[#eee8e8] border text-2xl font-black' onClick={plusBtn} >+</button>
              </div>
              <div>
                <p className='text-gray-400 text-start m-2  block text-base'>Infant(below 12)</p>
                <button className='w-14 bg-[#eee8e8] border text-2xl font-black' onClick={minusBtn2} >-</button>
                <input className='w-14 text-center border text-2xl ' type="text" name="adultTextBox" id="" value={infantValue} />
                <button className='w-14 bg-[#eee8e8] border text-2xl font-black' onClick={plusBtn2} >+</button>
              </div>
            </div>
          </div>
          {/*  */}
          <div className='mt-8'>
            <p className='text-lg'>Select Trip(s)</p>
            <p className='inline ml-6 text-xl'>Trip 1<hr className='border-spacing-2' /></p>
            <div className='text-center grid md:grid-cols-3 col-span-2'>
              <div>
                <p className='text-gray-400 text-start m-2 block text-base'>From</p>
                <select className='w-40 border h-8'>
                  <option value="">Select From</option>
                  <option value="portblair">Port Blair</option>
                  <option value="neilisland">Neil Island</option>
                  <option value="havelock">Havelock</option>
                </select>
              </div>
              <div>
                <p className='text-gray-400 text-start m-2  block text-base'>To</p>
                <select className='w-40 border h-8'>
                  <option value="">Select To</option>
                  <option value="portblair">Port Blair</option>
                  <option value="neilisland">Neil Island</option>
                  <option value="havelock">Havelock</option>
                </select>              </div>
              <div>
                <p className='w-40 text-gray-400 text-start m-2  block text-base'>Date of Journey</p>
                <input className='text-center border text-2xl ' type="date" name="adultTextBox" id="" value={infantValue} />
              </div>
            </div>
            <button className='border py-2 px-8 bg-green-500 w-full mt-9'>Search</button>
          </div>
        </div>
      </div>



      <div className="font-[Poppins]">
        <img className='p-2 rounded' src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/banner_01.jpg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
        <div className='grid md:grid-cols-4 sm:grid-cols-2 text-center justify-center items-center m-8'>
          <div className="mx-2">
            <img className='m-auto mb-4' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/research.svg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
            <p>and compare ferries from a large selection</p>

          </div>
          <div className="mx-2">
          <img className='m-auto mb-4' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket-1.svg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
            <p>tickets by securely paying only ₹200 per ticket</p>

          </div>
          <div className="mx-2">
          <img className='m-auto mb-4' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/ticket.svg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
            <p>your confirmed ticket in 3-4 working hours</p>

          </div>
          <div className="mx-2">
          <img className='m-auto mb-4' src="https://ocean.go2andaman.com/wp-content/uploads/2021/03/pay.svg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
            <p>the balance in the next 24 hours & enjoy your trip</p>

          </div>

        </div>
        <img className='p-2 rounded' src="https://ocean.go2andaman.com/wp-content/uploads/2022/05/MobiKwik-Promo.png?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
        <div className='bg-white py-8 my-8 w-full'>
          <p className='my-5 ml-8 text-3xl text-gray-500'>Why Book Ferries with Go2andaman</p>
          <div>
            <ol className='mx-10'>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>1</span>Pay in Full only after receiving Confirmed Tickets</li>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>2</span>Simplest Ferry Booking Experience</li>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>3</span>Easy Refunds</li>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>4</span>Great Email & Phone Support</li>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>5</span>International & Domestic Payments Accepted</li>
              <li className='text-lg mx-4 my-8'><span className='mx-4 border py-3 px-4 bg-red-100 text-center font-bold rounded-full border-red-600 text-red-600'>6</span>Money Safe Guarantee</li>
            </ol>
          </div>
        </div>
        <img className='p-2 rounded w-full' src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/confirmation-banner_02.jpg?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
      </div>
    </div>
  )
}

export default BookFerry