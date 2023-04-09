import React from 'react'
import CustomHomeCard from "./CustomHomeCard"
import ThingsToKnowCard from "./ThingsToKnowCard"
import PlacesYouDontMissCard from "./PlacesYouDontMissCard"
import { Link } from 'react-router-dom'

export default function Homepage() {
  const cardData = [
    {
      title: "Place an incredible triip",
      para: "Build the trip-of-a-lifetiime with us",
      img: "https://ocean.go2andaman.com/wp-content/uploads/2020/12/destination11.svg?compress=true&quality=90&w=70&dpr=2.0",
    },
    {
      title: "The Best Hotels + Resorts",
      para: "The top stays on every island",
      img:'https://ocean.go2andaman.com/wp-content/uploads/2020/11/hotel.svg?compress=true&quality=90&w=70&dpr=2.0',
    },
    {
      title: "Explore Things-to-do",
      para: "All the must-do activities right here",
      img:'https://ocean.go2andaman.com/wp-content/uploads/2020/05/scuba.svg?compress=true&quality=90&w=70&dpr=2.0',
    },
    {
      title: "Easy Feryy Bookings",
      para: "Inter-island travel mmade easy",
      img:'https://ocean.go2andaman.com/wp-content/uploads/2020/05/boat.svg?compress=true&quality=90&w=70&dpr=2.0',
    }
  ]
  return (
    <div className=''>
      <div className='homeBg bg-heroHome bg-no-repeat bg-center bg-cover '>
        <div className='text-center p-9'>
          <h1 class="md:text-7xl text-3xl mt-6 text-white font-atma">ANDAMANS.YOUR WAY.</h1>
          <p class="font-serif md:text-2xl text-white">The best of Andamans, curated for you</p>
        </div>
        <div className='md:flex md:items mt-16 justify-center'>
          {
            cardData.map((i) => (
              <CustomHomeCard title={i.title} para={i.para} img={i.img} />
            ))
          }
        </div>
      </div>






      <div className='mt-10 grid justify-center'>
        <div className=''>
          <p className='mt-5 font-extrabold font-[sans] text-center mb-6 text-4xl'>Things To Know Before You Go</p>
          <div className='grid sm:grid-cols-2 md:grid-cols-3'>
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2021/05/neil-island-natural-rock-banner-go2andaman.jpeg"} title={"Top 55 Places to Visit in Andaman"} />
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2022/04/Andamans-Offer-and-not-Banner.png"} title={"What the Andamans Won't Offer You. And What It Will"} />
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/go2andaman_havelock_7599.jpeg"} title={"How Safe is Andaman?"} />
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2022/07/banner.jpg"} title={"How to do Andaman on a Budget?"} />
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2021/12/Honeymoon-Main-Banner.jpg"} title={"Ultimate Guide to Honeymoon in the Andamans"} />
            <ThingsToKnowCard img={"https://www.go2andaman.com/wp-content/uploads/2021/06/Luxury-Guide-1.png"} title={"Holiday in the Andamans: A Luxury Guide"} />
          </div>
        </div>
        <div className='mt-20 m-auto'>
          <Link>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2021/06/Homepage-Banner-Travel-Guide-e1624512569470.png?compress=true&quality=90&w=1366&dpr=1.0" alt="" />
          </Link>
        </div>
      </div>







      <div className='mt-20 grid justify-center'>
        <p className=' font-extrabold font-[sans] text-center text-2xl sm:text-3xl md:text-4xl'>Places You Don’t Want To Miss</p>
        <div className='grid m-1 sm:grid-cols-2 md:grid-cols-3'>
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/03/cellular-jail-port-blair-banner-1-1.jpg"} title={"Cellular Jail"} location={"Port Blair"} required={"Tickets Required"} />
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/netaji-subhas-chandra-bose-ross-island-andaman-go2andaman3.jpg"} title={"Ross Island"} location={"Port Blair"} required={"Tickets Required"} />
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/Jolly-Buoy_0001_DSC_0598-1.jpg"} title={"Jolly Buoy (Port Blair)"} location={"Port Blair"} required={"Tickets Required"} />
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/radhanagar_beach_go2andaman_havelock4-550x367-2.jpg"} title={"Radhanagar Beach"} location={"Havelock Island"} required={"Entry Free"} />
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/Bharatpur-beach-Neil-island-go2andaman-11.jpg"} title={"Bharatpur Beach"} location={"Neil Island"} required={"Entry Free"} />
          <PlacesYouDontMissCard img={"https://www.go2andaman.com/wp-content/uploads/2021/01/ross_smith_islands_go2andaman_diglipur20-550x366-1.jpg"} title={"Rose and Smith Island"} location={"Diglipur"} required={"Entry Free"} />
        </div>
      </div>







      <div className='mt-6 grid justify-center font-[sans] '>
        <p className='font-extrabold text-center mb-6 text-4xl'> Why Choose Us? </p>
        <div className='grid md:grid-cols-3'>
          <div className=''>
            <img className='w-34 my-4 m-auto' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/handshake.svg?compress=true&quality=90&w=240&dpr=1.0" alt="" />
            <div className='text-center'>
              <p>Local Expertise</p>
              <p>By the locals, for the world</p>
            </div>
          </div>
          <div className=''>
            <img className='m-auto mb-4 w-24' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/hotel-1.svg?compress=true&quality=90&w=300&dpr=1.0" alt="" />
            <div className='text-center'>
              <p>The Choicest Experiences</p>
              <p>Only the best experiences make it to G2A</p>
            </div>
          </div>
          <div className=''>
            <img className='w-24 mb-4 m-auto' src="https://ocean.go2andaman.com/wp-content/uploads/2020/12/sunset.svg?compress=true&quality=90&w=240&dpr=1.0" alt="" />
            <div className='text-center'>
              <p>Tailor-make your own holiday</p>
              <p>Build your holiday your way</p>
            </div>
          </div>
        </div>
      </div>




      <div className='grid justify-items-center my-20 md:grid-cols-3 font-[sans] '>
        <div className='bg-white w-80   p-4'>
          <div className='flex justify-between'>
            <p className='text-2xl font-bold'>Subscribe</p>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/mailer.svg?compress=true&quality=90&w=376&dpr=2.0" alt="" />
          </div>
          <div>
            <p className='text-sm my-8 '>We send out tips + insider knowledge that will make your holiday to the Andamans epic. No Spam. Unsubscribe anytime you like.</p>
          </div>
          <div className='flex justify-between'>
            <input className='border border-gray-400' type="email" />
            <button className='bg-green-600 text-white p-1'>Subscribe</button>
          </div>
        </div>



        <div className='bg-white w-80 my-4 md:my-0 p-4'>
          <div className='flex justify-between'>
            <p className='text-2xl font-bold'>Collaborate with Us</p>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/10/blog.png?compress=true&quality=90&w=376&dpr=2.0" alt="" />
          </div>
          <div>
            <p className='text-sm my-8 mb-11 '>If content is your thing and you’d like to write about the Andamans, reach out to us!</p>
          </div>
          <div className='flex justify-end'>
            <button className='bg-green-600 text-white p-1'>Find Out How?</button>
          </div>
        </div>




        <div className='bg-white w-80  p-4'>
          <div className='flex justify-between'>
            <p className='text-2xl font-bold'>Be your own tour guide</p>
            <img src="https://ocean.go2andaman.com/wp-content/uploads/2020/05/tour.svg?compress=true&quality=90&w=376&dpr=2.0" alt="" />
          </div>
          <div>
            <p className='text-sm my-8 '>Download our resourceful, chic maps to help you navigate the Andamans in style. \ Comes with a whole set of G2A-approved tips!</p>
          </div>
          <div className='flex justify-end'>
            <button className='bg-green-600 text-white p-1'>Download</button>
          </div>
        </div>

      </div>

    </div>
  )
}
