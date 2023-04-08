import React from 'react'
import CustomHomeCard from "./CustomHomeCard"

export default function Homepage() {
  const cardData = [
    {
      title: "Place an incredible triip",
      para:"Build the trip-of-a-lifetiime with us",
    },
    {
      title: "The Best Hotels + Resorts",
      para:"The top stays on every island",
    },
    {
      title: "Explore Things-to-do",
      para:"All the must-do activities right here",
    },
    {
      title: "Easy Feryy Bookings",
      para:"Inter-island travel mmade easy",
    }
  ]
  return (
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
  )
}
