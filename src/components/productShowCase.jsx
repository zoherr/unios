import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productShowCaseImgData } from "../../utils/data"

const ProductShowCase = () => {
  const containerRef = useRef();
  const timelineRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    // Initial scroll-triggered animation
    gsap.from(".product-img1", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "center 150px",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      x: -30,
      stagger: 0.1,
      duration: 1.2,
      ease: "power2.out", 
    });

    gsap.from(".product-img2", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "center 150px",
        scrub: 1,
      },
      opacity: 0,
      y: -50,
      x: 30,
      stagger: 0.1,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(".animatedText", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "center 150px",
        scrub: 1,
      },
      scale: 0.5,
      opacity: 0,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(".product-img3", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "center 150px",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      x: -30,
      stagger: 0.1,
      duration: 1.2,
      ease: "power2.out",
    });

    gsap.from(".product-img4", {
      scrollTrigger: {
        trigger: ".box",
        start: "top center",
        end: "center 150px",
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      x: 30,
      stagger: 0.1,
      duration: 1.2,
      ease: "power2.out",
    });

  }, []);

  return (
    <div className="overflow-hidden bg-transparent">


      <div className="bg-white w-screen box" ref={containerRef}>

        {/* Top */}
        <div className="flex justify-between relative z-20">
          <div className="relative -top-11 z-30">
            <img
              src={productShowCaseImgData[0].img1}
              alt=""
              className='product-img1 product-img-1 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="relative top-28 z-25">
            <img
              src={productShowCaseImgData[1].img2}
              alt=""
              className='product-img1 product-img-2 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="h-10 relative z-20">
            <img
              src={productShowCaseImgData[2].img3}
              alt=""
              className='product-img2 product-img-3 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="h-10 relative z-35">
            <img
              src={productShowCaseImgData[3].img4}
              alt=""
              className='product-img2 product-img-4 bg-transparent inline-block overflow-hidden w-auto h-auto'
            />
          </div>
        </div>

        {/* Middle */}
        <div className="flex justify-center relative z-50">
          <h1 className='main-title text-6xl font-bold animatedText'>
            <span className='underline'>Changing</span> how the world views lighting
          </h1>
        </div>

        {/* Bottom */}
        <div className="flex my-20 relative z-20 justify-between">
          <div className="relative z-25">
            <img
              src={productShowCaseImgData[4].img5}
              alt=""
              className='product-img3 product-img-5 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="relative top-28 z-20">
            <img
              src={productShowCaseImgData[5].img6}
              alt=""
              className='product-img3 product-img-6 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="relative left-48 z-30">
            <img
              src={productShowCaseImgData[6].img7}
              alt=""
              className='product-img4 product-img-7 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
          <div className="h-10 relative z-25">
            <img
              src={productShowCaseImgData[7].img8}
              alt=""
              className='product-img4 product-img-8 inline-block overflow-hidden w-auto h-auto'
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductShowCase;