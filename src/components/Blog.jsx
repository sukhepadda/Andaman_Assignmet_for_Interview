import React from 'react'
import BlogCard from "./BlogCard"

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

    ]

    return (
        <div className="font-sans container mx-auto mt-5 grid md:grid-cols-4 gap-4">
            <div className="col-span-3">
                <p className='text-gray-500'>Home &rArr; <span className='text-black'>Blog</span></p>
                <div className="grid grid-cols-1 mt-5 md:grid-cols-3 gap-6">
                    {
                        blogCardData.map(i => (
                            <BlogCard title={i.title} tags={i.tags} img={i.img} popularity={i.popularity} />
                        ))
                    }
                </div>

            </div>
            <div className="shadow mt-10">
                    
            </div>
        </div>
    )
}

export default Blog