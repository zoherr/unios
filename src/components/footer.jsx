import React from 'react'

const Footer = () => {
    return (
        <div className='bg-[#111111] w-full py-5 text-white' >
            <div className=" py-10">
                <div className="">
                    <div className="flex px-20 justify-between items-start">
                        <div className="w-[30%]">
                            <h1 className='text-4xl font-black'>unios</h1>
                        </div>
                        
                        <div className="w-[80%]">

                            <div className="mb-5">
                                <p className='text-2xl my-2 font-medium'>Stay up to date</p>
                                <p className='opacity-50 text-sm'>Subscribe to our newsletter for the latest news, product updates, project case studies and more. Privacy Policy.</p>
                            </div>

                            <div className="mt-4 flex gap-7">
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="" id="firstName" className='p-2 text-white border-white border-[1px] opacity-50' />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="" id="firstName" className='p-2 text-white border-white border-[1px] opacity-50' />
                                </div>
                                <div className="flex flex-col gap-2 ">
                                    <label htmlFor="firstName">First Name</label>
                                    <input type="text" name="" id="firstName" className='text-white p-2 border-white border-[1px] opacity-50' />
                                </div>
                                <div className="bg-white text-black text-sm mt-6 py-3  px-8 flex justify-center items-center">Submit</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
            <div className=""></div>
        </div>
    )
}

export default Footer