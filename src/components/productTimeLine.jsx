import React from 'react'
import { productTimelineData } from '../../utils/data'
import { MoveRight } from 'lucide-react'
const ProductTimeLine = () => {
    return (
        <div className="">
            <div
                className="w-full h-screen bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: `url(${productTimelineData.bgImage})`
                }}
            >

                <div className="flex h-full w-full">

                    <div className="w-[50%]"></div>
                    <div className="w-[50%] border-2 flex justify-center items-center">
                        <div className="w-full flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center">
                                <div className="bg-white h-96 w-[45%] px-5">
                                    <img
                                        src={productTimelineData.pImage}
                                        alt=""
                                        className="hover:scale-110 mb-5 ease-in-out object-contain"
                                    />
                                    <h2 className='text-center text-xl'>ION S Track Light</h2>
                                </div>
                                <div className="bg-blue-800 px-5 py-4 flex justify-center items-center gap-4 relative bottom-2">
                                    <h1 className='text-white text-xl leading-0'>Configure now </h1>
                                    <MoveRight className='text-white' />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductTimeLine