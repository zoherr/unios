import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

// Sample data structure based on your requirements
const heroData = [
    {
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=800&fit=crop',
        text: 'Modern Architecture',
        color: 'from-slate-900 via-gray-900 to-zinc-900',
        desc: 'Immerse yourself in our expansive collection featuring innovative architectural designs that redefine modern living spaces with cutting-edge technology.'
    },
    {
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
        text: 'Urban Landscapes',
        color: 'from-slate-900 via-gray-900 to-zinc-900',
        desc: 'Explore breathtaking urban environments and cityscapes that showcase the perfect intersection of nature and human innovation in design.'
    },
    {
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop',
        text: 'Interior Excellence',
        color: 'from-slate-900 via-gray-900 to-zinc-900',
        desc: 'Discover meticulously curated interior spaces that blend functionality with aesthetic perfection for contemporary living experiences.'
    },
    {
        video: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
        image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop',
        text: 'Sustainable Design',
        color: 'from-slate-900 via-gray-900 to-zinc-900',
        desc: 'Experience eco-friendly architectural solutions that harmonize environmental responsibility with cutting-edge design principles and innovation.'
    }
];

const Hero = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const currentItem = heroData[activeIndex];

    const textRef = useRef()
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        gsap.from(textRef.current, {
         
            scale: 0.5,
            opacity: 0,
            duration: 1,
        });

    })

    useEffect(() => {
        const interval = setInterval(() => {
            setIsTransitioning(true);
            setTimeout(() => {
                setActiveIndex((prevIndex) => (prevIndex + 1) % heroData.length);
                setIsTransitioning(false);
            }, 300);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="  bg-gray-900 text-white overflow-hidden relative">
            <div className="h-32 relative z-40"></div>
            <h1 ref={textRef} className="text-6xl absolute top-80 w-full mx-auto p-4 z-50 text-center font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                {currentItem.text}
            </h1>
            <div className="relative  flex -mt-32">

                <div className="w-1/2 relative overflow-hidden">
                    <video
                        key={currentItem.video}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src={currentItem.video} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className={`w-1/2 pb-28 pt-10 relative overflow-hidden transition-all duration-1000 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>

                    <div className={`absolute inset-0 bg-gradient-to-br ${currentItem.color} transition-all duration-1000`}></div>

                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.2),transparent_50%)]"></div>
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-center items-center px-12 text-center">

                        <div
                            className={`mt-56 max-w-xl h-[350px] mb-8 overflow-hidden transition-all duration-700 ${isTransitioning ? 'w-0 opacity-0' : 'w-full opacity-100'
                                }`}
                        >
                            <img
                                src={currentItem.image}
                                alt={currentItem.text}
                                className="w-full h-full object-cover shadow-2xl"
                            />
                        </div>


                        <div className=" transition-all duration-700 max-w-xl ">

                            <p className="text-lg text-gray-200 text-start  leading-relaxed w-[70%]  ">
                                {currentItem.desc}
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};



export default Hero;
