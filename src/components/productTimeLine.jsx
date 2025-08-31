import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { productTimelineData } from '../../utils/data'
import { Heart, MoveRight, Plus } from 'lucide-react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ProductTimeLine = () => {
    const sectionRef = useRef();
    const textRefs = useRef([]);
    const progressLineRef = useRef();
    const productRef = useRef();

    gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

     
        const scrollTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                end: "+=300%",
                scrub: 1,
                pin: true,
                onUpdate: (self) => {
                    gsap.set(progressLineRef.current, {
                        height: `${self.progress * 100}%`
                    });
                }
            },
        });

        textRefs.current.forEach((textEl, index) => {
            if (textEl) {
                const startTime = index * 1;
                const endTime = startTime + 0.8;

                scrollTl.fromTo(textEl,
                    { opacity: 0, x: 50, y: 20 },
                    { opacity: 1, x: 0, y: 0, duration: 0.6, ease: "power2.out" },
                    startTime
                );

                if (index < textRefs.current.length - 1) {
                    scrollTl.to(textEl,
                        { opacity: 0, duration: 0.4, ease: "power2.out" },
                        endTime
                    );
                }
            }
        });
        scrollTl.fromTo("#mainImage",
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            0.2
        );

        scrollTl.fromTo("#secondImage",
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            1.2 
        );

        scrollTl.fromTo("#thirdImage",
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            2.2 
        );

        scrollTl.fromTo("#fourthImage",
            { autoAlpha: 0, y: 50 },
            { autoAlpha: 1, y: 0, duration: 0.6, ease: "power2.out" },
            3.2 
        );

    }, []);


    const textContent = productTimelineData.textData;

    return (
        <div className="">
            <div className="" ref={sectionRef}>
                <div
                    className="w-full h-screen bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: `url(${productTimelineData.bgImage})`
                    }}
                >
                    <div className="flex h-full w-full">
                      
                        <div className="w-[50%] flex items-center">

                            <div className="h-4/5 mx-5 my-5 bg-white bg-opacity-50 w-1 relative rounded-full">
                                <div
                                    ref={progressLineRef}
                                    className="absolute top-0 left-0 w-full bg-amber-200 rounded-full"
                                    style={{ height: '0%' }}
                                ></div>
                            </div>

                            <div className="relative flex-1 ">
                                {textContent.map((text, i) => (
                                    <p
                                        key={i}
                                        ref={(el) => (textRefs.current[i] = el)}
                                        className="absolute top-0 left-6 text-white font-bold text-3xl  leading-relaxed  "
                                        style={{ opacity: i === 0 ? 1 : 0 }}
                                    >
                                        {text}
                                    </p>
                                ))}
                            </div>

                        </div>


                        <div className="w-[50%] border-2 flex justify-center items-center">
                            <div className="w-full flex items-center justify-center">
                                <div className="flex flex-col items-center justify-center">
                                    <div id='mainImage' className="bg-white h-96 w-[45%] px-5">
                                        <img
                                            src={productTimelineData.pImage}
                                            alt=""
                                            className="hover:scale-110 mb-5 ease-in-out object-contain"
                                        />
                                        <h2 className='text-center text-xl'>ION S Track Light</h2>
                                    </div>

                                    <div id='secondImage' className="bg-blue-900 px-5 w-fit py-3 flex justify-center items-center gap-4 relative bottom-2">
                                        <h1 className='text-white text-xl leading-0'>Configure now </h1>
                                        <MoveRight className='text-white' />
                                    </div>

                                    <div id='thirdImage' className="relative flex gap-2 bottom-16 right-48">
                                        <div className="p-4 h-12 w-12 text-sm bg-white flex justify-center items-center">
                                            <Plus className='text-sm text-blue-900' />
                                        </div>
                                        <div className="p-4 h-12 w-12 text-sm bg-white flex justify-center items-center">
                                            <Heart className='text-sm text-blue-900' />
                                        </div>
                                    </div>

                                    <div id='fourthImage' className="relative right-52 shadow-2xl  -top-96 ">
                                        <div className="bg-white p-3 w-28 flex justify-center mb-3 items-center gap-2"> <span className='bg-amber-600 h-2.5 w-2.5'></span> <p>300K</p></div>
                                        <div className="bg-white p-3 w-28 flex justify-center items-center gap-2"> <span className='bg-amber-600 h-2.5 w-2.5'></span> <p>2700K - 6500k</p></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

          
        </div>
    );
};

export default ProductTimeLine;