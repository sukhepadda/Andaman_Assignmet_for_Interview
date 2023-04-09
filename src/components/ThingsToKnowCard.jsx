import React from 'react'

function ThingsToKnowCard({img, title}) {
    return (
        <>

            <div className="flex m-3 w-full ">
                <div className="hover:border-4 border-gray-300 h-48 lg:h-32 lg:w-32 " >
                    <img className="h-full w-64 " src={img} alt="" />
                </div>
                <div className=" md:w-48 w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r px-4 flex flex-col justify-between leading-normal">
                    <div className="">
                        <hr />
                        <div className="text-red-500 font-sans my-2">
                            {title}
                        </div>
                        <hr />
                        <p className='font-sans text-sm text-gray-500'>+ Explore</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThingsToKnowCard