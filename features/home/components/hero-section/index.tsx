import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'; // Add Navigation
import { ChevronLeft, ChevronRight } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import "@/global.css"

const slides = [
    {
        subtitle: "We Increase Your",
        title: "Business Goals",
        description: "Using Modern Technology and IT Services",
        image: 'https://themes.coderthemes.com/prompt_tr/assets/coworking4-2154e3ea.jpg'
    },
    {
        subtitle: "Top-Notch Software",
        title: "Development",
        description: "Using modern technology & modern fromeworks",
        image: 'https://themes.coderthemes.com/prompt_tr/assets/coworking2-2fcd89b1.png'
    },
    {
        subtitle: "Innovative Solutions",
        title: "For Your Business",
        description: "Custom IT solutions tailored to your unique needs",
        image: 'https://themes.coderthemes.com/prompt_tr/assets/blog-1-23bf6318.png'
    },
]

const HeroSection = () => {
    const swiperRef = useRef<any>(null);

    useEffect(() => {
        const swiper = swiperRef.current.swiper;

        const handleMouseEnter = () => {
            swiper.autoplay.stop();
        };

        const handleMouseLeave = () => {
            swiper.autoplay.start();
        };

        if (swiper) {
            const swiperEl = swiper.el;
            swiperEl.addEventListener('mouseenter', handleMouseEnter);
            swiperEl.addEventListener('mouseleave', handleMouseLeave);
            return () => {
                swiperEl.removeEventListener('mouseenter', handleMouseEnter);
                swiperEl.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    const onNext = () => {
        swiperRef.current.swiper.slideNext();
    }

    const onPrev = () => {
        swiperRef.current.swiper.slidePrev();
    }

    return (
        <section className="relative h-[300px] md:h-[600px] bg-gray-200">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={true}
                loop={true}
                effect="fade"
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                // navigation={true}
                className="relative h-full md:h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="bg-cover bg-center bg-no-repeat relative h-full"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <div className='flex flex-col justify-center items-center h-full text-white gap-4'>
                                <h1 className="animate-slidein opacity-0 [--slidein-delay:300ms] text-xl md:text-2xl text-inherit font-semibold">
                                    {slide.subtitle}
                                </h1>
                                <h1 className="animate-slidein opacity-0 [--slidein-delay:300ms] text-3xl md:text-5xl text-inherit font-semibold">
                                    {slide.title}
                                </h1>
                                <p className="animate-slidein opacity-0 [--slidein-delay:500ms] text-base md:text-xl text-inherit text-center">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="flex justify-between items-center absolute left-0 right-0 top-1/2 mx-3 md:mx-5 z-10">
                <button onClick={onPrev} className='flex flex-col items-center justify-center'>
                    <ChevronLeft color="white" className='h-5 w-5 md:h-8 md:w-8' />
                </button>
                <button onClick={onNext} className='flex flex-col items-center justify-center'>
                    <ChevronRight color="white" className='h-5 w-5 md:h-8 md:w-8' />
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
