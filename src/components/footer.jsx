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
            <div className="">

                <div className="max-w-7xl mx-auto px-10 py-16 grid grid-cols-5 gap-12">

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-white font-semibold mb-4">Contact us</h2>
                        <p className="mb-2">Unios HQ</p>
                        <p className="mb-2">37 Boom St,<br />Gnangara WA 6077</p>
                        <p className="mb-2">+618 9248 1888</p>
                        <p className="mb-4">sales@unios.com</p>

                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Where to buy →</li>
                            <li className="hover:text-white cursor-pointer">Showroom →</li>
                            <li className="hover:text-white cursor-pointer">Warranty →</li>
                        </ul>

                        <p className="italic text-sm opacity-60 mt-4">
                            Showroom viewings by appointment only
                        </p>
                    </div>

                    {/* Products */}
                    <div>
                        <h2 className="text-white font-semibold mb-4">PRODUCTS</h2>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Accessories</li>
                            <li className="hover:text-white cursor-pointer">Ceiling Recessed</li>
                            <li className="hover:text-white cursor-pointer">Ceiling Surface</li>
                            <li className="hover:text-white cursor-pointer">Ceiling Suspended</li>
                            <li className="hover:text-white cursor-pointer">Drivers</li>
                        </ul>
                    </div>

                    {/* Projects */}
                    <div>
                        <h2 className="text-white font-semibold mb-4">PROJECTS</h2>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Retail</li>
                            <li className="hover:text-white cursor-pointer">Hospitality</li>
                            <li className="hover:text-white cursor-pointer">Public Spaces</li>
                            <li className="hover:text-white cursor-pointer">Multi-Residential</li>
                            <li className="hover:text-white cursor-pointer">Industrial</li>
                        </ul>
                    </div>

                    {/* Stories */}
                    <div>
                        <h2 className="text-white font-semibold mb-4">STORIES</h2>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Sustainability and Wellness</li>
                            <li className="hover:text-white cursor-pointer">Technology and Futurism</li>
                            <li className="hover:text-white cursor-pointer">Architecture and Design</li>
                            <li className="hover:text-white cursor-pointer">Diversity and Inclusion</li>
                            <li className="hover:text-white cursor-pointer">Standards and Guidelines</li>
                        </ul>
                    </div>

                    {/* Brand + Resources */}
                    <div>
                        <h2 className="text-white font-semibold mb-4">BRAND</h2>
                        <ul className="space-y-2 mb-6">
                            <li className="hover:text-white cursor-pointer">Why Unios</li>
                            <li className="hover:text-white cursor-pointer">About Unios</li>
                            <li className="hover:text-white cursor-pointer">Our Culture</li>
                        </ul>

                        <h2 className="text-white font-semibold mb-4">RESOURCES</h2>
                        <ul className="space-y-2">
                            <li className="hover:text-white cursor-pointer">Book</li>
                            <li className="hover:text-white cursor-pointer">Catalogue</li>
                            <li className="hover:text-white cursor-pointer">Magazine</li>
                            <li className="hover:text-white cursor-pointer">Other</li>
                            <li className="hover:text-white cursor-pointer">Product Literature</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 py-6 text-sm text-gray-500 px-10">
                    <p>© 2023 Unios Pty Ltd</p>
                    <p className="mt-2">
                        <a href="#" className="hover:text-white underline">Privacy Policy</a>
                    </p>
                    <p className="mt-2">
                        This site is protected by Google reCAPTCHA.{" "}
                        <a href="#" className="hover:text-white underline">Privacy Policy</a> and{" "}
                        <a href="#" className="hover:text-white underline">Terms of Service</a> apply.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer

