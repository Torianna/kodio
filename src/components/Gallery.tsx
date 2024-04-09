import React, {FunctionComponent, useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './Gallery.css'
import slidesData from '../data/slidesData.json'
import {Slide} from "./Slide";

export const Gallery: FunctionComponent = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                {
                    slidesData.map((slide, index) =>
                    <Slide key={index} slide={slide}/>)
                }
            </div>
        </div>
    )
}