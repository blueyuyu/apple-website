import {
  hero, smallHero
} from '@/constant/video.ts'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

const Hero = () => {
  // 引入动画效果
  const heroContainer = useRef(null);
  const heroTitleRef = useRef(null);
  const heroBtnRef = useRef(null);


  useGSAP(() => {
    gsap.from('.hero-btn', { opacity: 0, y: 100, duration: 1.5, delay: 0.5 });
    gsap.from(".hero-title", { opacity: 0, duration: 1.5, delay: 0.5 });
  })


  return (
    <section className="nav-height" ref={heroContainer}>
      <div className="h-4/5 hero-video flex flex-col items-center justify-center">
        <p className='hero-title pb-5 sm:pb-0' ref={heroTitleRef}>iPhone 15 Pro</p>
        <video className="hidden sm:block w-10/12" autoPlay muted loop disablePictureInPicture src={hero}></video>
        <video className="sm:hidden  w-9/10" autoPlay muted loop disablePictureInPicture src={smallHero}></video>
      </div>
      <div className="hero-btn flex flex-col items-center" ref={heroBtnRef}>
        <button className='bg-[#2997ff] border border-solid border-[#2997ff] text-white px-5 py-2 rounded-3xl hover:bg-black hover:text-[#2997ff]  '>Buy</button>
        <p className='pt-4 text-xl'>From $199/month or $999</p>
      </div>
    </section>
  )
}

export default Hero;