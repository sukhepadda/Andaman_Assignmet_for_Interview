import React from 'react'

function BlogCard({ title, tags, img, popularity }) {
    return (
        <div className="md:max-w-sm m-auto h-full rounded overflow-hidden shadow-lg">
            <img className="w-full" src={img} alt="Sunset in the mountains" />
            <div className="px-6 py-4">
                <p className="text-green-600 text-sm">
                    {popularity}
                </p>
                <hr className="h-px my-2 bg-gray-400 border-0" />
                <div className="font-bold text-xl mb-2">{title}</div>
                <hr className="h-px my-2 bg-gray-400 border-0 " />
                <p className="text-gray-500 text-xs">
                    +Explore
                </p>
            </div>
            <div className="px-4 pb-2">
                {
                    tags.map(i => (
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{i}</span>
                    ))

                }
            </div>
        </div>
    )
}

export default BlogCard