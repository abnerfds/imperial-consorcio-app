'use client'
import Subtitle from '../Subtitle/Subtitle'
import CardVideo from './CardVideo/CardVideo'
import React, { useEffect, useState } from 'react'

const Testimony = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(true)
    const checkScreenSize = () => {
        setIsSmallScreen(window.innerWidth < 900);
    };

    useEffect(() => {
        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => {
            window.removeEventListener('resize', checkScreenSize);
        };
    }, []);

    return (
        <section className="advantage__bg-white min-h-min flex flex-col justify-center items-center py-52">
            <Subtitle classStyle=''>Confira os depoimentos de quem já realizou seus sonhos</Subtitle>
            
            <section
                className={`
                    ${isSmallScreen 
                        ? 'carousel carousel-center max-w-full p-4 space-x-4' 
                        : 'flex flex-wrap justify-center'} gap-6 md:gap-8 pt-14` }>
                <CardVideo
                    nameWitness='Carlos'
                    src='https://www.youtube.com/embed/ceCMxv72Uqw?si=LS9ve8JoElgmpVrG' 
                    isSmallScreen={isSmallScreen} 
                />
                <CardVideo
                    nameWitness='Marcela'
                    src='https://www.youtube.com/embed/S81jY3-I0oc?si=wR1vpQ8POScoeLne' 
                    isSmallScreen={isSmallScreen} 
                />
                <CardVideo
                    nameWitness='João'
                    src='https://www.youtube.com/embed/bfTv6A1Wn4k?si=1UypDvbE7DZ0fare' 
                    isSmallScreen={isSmallScreen} 
                />
                <CardVideo
                    nameWitness='João'
                    src='https://www.youtube.com/embed/hJ7Rg1821Q0?si=HaximHH2mOGEqy8Y' 
                    isSmallScreen={isSmallScreen} 
                />
            </section>
        </section>
    )
}

export default Testimony