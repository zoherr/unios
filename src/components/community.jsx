import React from 'react'
import { communityData } from '../../utils/data'

const CommunityPage = () => {
    return (
        <div className="bg-[#111111]  w-screen py-7 ">
            <div className="flex-col flex mt-14 justify-center items-center">
                <div className="mt-5">
                    <h1 className='text-white text-center text-4xl font-bold '>Join Our Community</h1>
                </div>
                <div className="flex w-[70%] items-center justify-center gap-12  flex-wrap mt-28 mb-12">
                    {communityData.map((item, index) => (
                        <div key={index} className="flex w-[45%] py-4 border-white border-b-2 ">
                            <div className="flex flex-col gap-3">
                                <h1 className='text-white text-2xl font-bold'>{item.title}</h1>
                                <p className='text-fuchsia-50 opacity-65'>{item.desc}</p>
                            </div>
                            <div className="">
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CommunityPage