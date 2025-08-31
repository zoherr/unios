import React from 'react'

const FeaturesPage = () => {
    return (
        <div className='max-h-4/5   w-screen bg-gray-50'>
            <div className="flex h-4/3">
                <div className="w-1/2 flex px-16 py-20">
                    <div className="w-1 bg-gray-700 mr-12 flex-shrink-0"></div>

                    <div className="flex flex-col justify-center space-y-12 ">

                        <div >
                            <h1 className="text-6xl font-bold text-blue-600 mb-8 leading-tight">
                                Saving you time
                            </h1>

                            <p className="text-gray-800 text-xl leading-relaxed">
                                Our digital-first approach is designed to win you back the most importance currency — time.
                            </p>
                        </div>

                        <div className="space-y-10">
                            <h2 className="text-3xl font-bold text-black">
                                Design, performance and value
                            </h2>

                            <h2 className="text-3xl font-bold text-black">
                                Sharing the good word of lighting
                            </h2>

                            <h2 className="text-3xl font-bold text-black">
                                Shaping a sustainable future for the built environment
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="w-1/2 flex h-3/4 items-center justify-center">
                    <img
                        src="https://unios.com/_next/image?url=https%3A%2F%2Funios-content.s3.ap-southeast-2.amazonaws.com%2Fstatic%2Fbrand%2FSaving%20you%20time.png&w=1920&q=75"
                        alt="Saving you time illustration"
                        className="object-contain"
                    />
                </div>
            </div>
        </div>
    )
}

export default FeaturesPage