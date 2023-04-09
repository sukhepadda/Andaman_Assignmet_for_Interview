import React from 'react'
import CustomHomeCard from "./CustomHomeCard"
import ThingsToKnowCard from "./ThingsToKnowCard"
import { Link } from 'react-router-dom'

export default function Homepage() {
  const cardData = [
    {
      title: "Place an incredible triip",
      para: "Build the trip-of-a-lifetiime with us",
    },
    {
      title: "The Best Hotels + Resorts",
      para: "The top stays on every island",
    },
    {
      title: "Explore Things-to-do",
      para: "All the must-do activities right here",
    },
    {
      title: "Easy Feryy Bookings",
      para: "Inter-island travel mmade easy",
    }
  ]
  return (
    <div className='mb'>
      <div className='homeBg bg-heroHome h-48 md:h-128 bg-no-repeat bg-center bg-cover '>
        <div className='text-center p-9'>
          <h1 class="md:text-7xl text-3xl mt-6 text-white font-atma">ANDAMANS.YOUR WAY.</h1>
          <p class="font-serif md:text-2xl text-white">The best of Andamans, curated for you</p>
        </div>

        <div className='md:flex md:items mt-16 mr-8 left-0 space-x-5'>
          {
            cardData.map((i) => (
              <CustomHomeCard title={i.title} para={i.para} />
            ))
          }
        </div>
      </div>
        <div className='mt-40 grid justify-center'>
        <div className=''>
          <p className='mt-5 font-extrabold font-[sans] text-4xl'>Things To Know Before You Go</p>
          <div className='grid md:grid-col-3'>
            <ThingsToKnowCard />
          </div>
        </div>
        <div className='mt-5'>
          <Link>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/06/Homepage-Banner-Travel-Guide-e1624512569470.png?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
          </Link>
        </div>
        </div>
    </div>
  )
}
