import React from 'react'
import BlogCard from "./BlogCard"
import { Link } from 'react-router-dom'

function Blog() {
    let blogCardData = [
        {
            title: "7 Must Try Local Experiences in Andaman",
            tags: ["Things To Document", "Local Experience"],
            popularity: "Popular",
            img: "https://thumbs.dreamstime.com/b/passport-flight-fly-travelling-travel-citizenship-concept-airplane-traveller-air-stock-image-86057681.jpg",
        },
        {
            title: "10 Mistakes Tourists Make in Andaman",
            tags: ["Planning Your Holiday"],
            popularity: "Popular",

            img: "https://images.unsplash.com/photo-1586053226626-febc8817962f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Best 25 Hotels in Andaman(2022 Edition)",
            tags: ["Top Hotels", "Port Blair"],
            popularity: "",

            img: "https://images.unsplash.com/photo-1579317344982-256c49ab1e0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "Reasons Why You Should visit Andaman",
            tags: ["Fantastic View", "Sandy Beaches", "Clear Blue Waters"],
            popularity: "",

            img: "https://images.unsplash.com/photo-1574616470494-8f2e992afd58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "How To Do Andamans on A Budget",
            tags: ["Get Tour in Budget"],
            popularity: "Popular",

            img: "https://images.unsplash.com/photo-1579376254079-3a86c6cd6869?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YW5kYW1hbiUyMGFuZCUyMG5pY29iYXIlMjBpc2xhbmRzJTIwaW5kaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "What the Andaman Won't Offer you and What It Will",
            tags: ["Things To Do", "Things Not To Do"],
            popularity: "",

            img: "https://images.unsplash.com/photo-1631364377744-2d0a1e5c40cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFuZGFtYW4lMjBhbmQlMjBuaWNvYmFyJTIwaXNsYW5kcyUyMGluZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
        },
        {
            title: "The 10 Best Hotels in Havelock",
            tags: ["Top Hotels", "Luxuries"],
            popularity: "Popular",

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTsvev7eaee_YwV9IqjKQnLA7XHLj9LQPFTfb74I2Fsg&usqp=CAU&ec=48665699",
        },
        {
            title: "Best Water Sports",
            tags: ["Water Sports", "Things To Do"],
            popularity: "Popular",

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycPmzDu7K_QY1Gfj8uxJiuPolThNghhGFnfKcuZIhEg&usqp=CAU&ec=48665699",
        },
        {
            title: "Maldives or Andamans - Where next?",
            tags: ["Holiday Ideas", "Planning Your Holidays"],
            popularity: "Popular",

            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFWKqPaj2JiULP5AEK3Ug1IbNAMg6JbnObSKWcvpCehw&usqp=CAU&ec=48665699",
        },

    ]
    let categories = [
        { category: "Planning Your Holiday" },
        { category: "Andamans or Elsewhere?" },
        { category: "Money & Budget" },
        { category: "Reaching Andaman" },
        { category: "Things To Do" },
        { category: "Top Hotels" },
        { category: "Best Beaches" },
        { category: "Holiday Ideas" },
        { category: "Travel Tips" },
        { category: "Food Recommendations" },
        { category: "Local Experiences" },
        { category: "Water Sports" },
        { category: "Adventure Sports" },
        { category: "Scuba Diving" },
        { category: "UncategorizedPort" },
        { category: "BlairHavelockNeil" },
        { category: "Island" },

    ]

    return (
        <div className="font-sans container mx-auto mt-5 md:grid md:grid-cols-4 gap-4">
            <div className="col-span-3">
                <p className='text-gray-500'>Home &rArr; <span className='text-black'>Blog</span></p>
                <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-6">
                    {
                        blogCardData.map(i => (
                            <BlogCard title={i.title} tags={i.tags} img={i.img} popularity={i.popularity} />
                        ))
                    }
                </div>

                <nav className=' m-4 ' >
                    <ul class="flex justify-center items-center -space-x-px">
                        <li>
                            <a href="#" class="block px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">1</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">2</a>
                        </li>
                        <li>
                            <a href="#" aria-current="page" class="px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">3</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">4</a>
                        </li>
                        <li>
                            <a href="#" class="px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">5</a>
                        </li>
                        <li>
                            <a href="#" class="block px-3 py-2 leading-tight text-black bg-white hover:bg-gray-100 hover:text-gray-700">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
            <div className="mt-10 ">
                {/* another sidebar */}
                <div className='p-1'>
                
                    <div class="relative  ">
                        <Link ><img className='mb-6 w-full' src="https://ocean.go2andaman.com/wp-content/uploads/2021/01/Sitapur-beach-neil-island-go2andaman-768x512-1-1.jpg?compress=true&quality=90&w=330&dpr=1.0" alt="" /></Link>

                        <h1 class="absolute text-center md:pt-20 p-10  h-full w-full text-3xl bg-black bg-opacity-50 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           Best Beaches on Island</h1>
                    </div>
                    <div class="relative  ">
                    <Link ><img className='my-6' src="https://ocean.go2andaman.com/wp-content/uploads/2021/08/CDDB2170-21BA-4556-9FD8-C0F79A618BF5.jpeg?compress=true&quality=90&w=320&dpr=2.0" alt="" /></Link>

                        <h1 class="absolute text-center md:pt-20 p-10  h-full w-full text-3xl bg-black bg-opacity-50 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           Find Where you Must Eat?</h1>
                    </div>
                    <div class="relative  ">
                    <Link ><img className='my-6' src="https://ocean.go2andaman.com/wp-content/uploads/2021/05/B19901D2-0F34-4B63-B2C8-C007B71E1853-scaled.jpeg?compress=true&quality=90&w=320&dpr=2.0" alt="" /></Link>

                        <h1 class="absolute text-center md:pt-20 p-10  h-full w-full text-3xl bg-black bg-opacity-50 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                           Top Things to Do in Andaman</h1>
                    </div>

                </div>
                {/* categories */}
                <div className='shadow p-10 mt-5 text-center'>
                    <h1 className='text-3xl mb-5'>Categories</h1>
                    <div className=' justify-center'>
                        {
                            categories.map(i => (
                                <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><Link to={"/"}>{i.category}</Link></span>
                            ))
                        }
                    </div>
                </div>
                {/* another sidebar2 */}
                <div className='shadow mt-5 text-center'>
                    <Link ><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/09/Final-How-to-plan-your-trip-steps-01.png?compress=true&quality=90&w=700&dpr=1.0" alt="" /></Link>
                    <Link ><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/12/Honeymoon-Main-Banner.jpg?compress=true&quality=90&w=700&dpr=1.0" alt="" /></Link>
                    <Link ><img src="https://ocean.go2andaman.com/wp-content/uploads/2021/06/Luxury-Guide-1.png?compress=true&quality=90&w=700&dpr=1.0" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Blog