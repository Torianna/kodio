import React from 'react'
import {NextButton, PrevButton} from './EmblaCarouselArrowButtons'
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import data from '../../data/slidesData.json'
import '../../embla.css'
import {SlideContent} from "./SlideContent";
import {SlidePicture} from "./SlidePicture";
import ActionContainer from "./ActionContainer/ActionContainer";
import {usePrevNextButtons} from "../../hooks/usePreviousNextButtons";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const Gallery: React.FC<PropType> = (props) => {
    const {slides, options} = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [emblaRef2, emblaApi2] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

    const {
        onPrevButtonClick: onPrevButtonClick2,
        onNextButtonClick: onNextButtonClick2,
    } = usePrevNextButtons(emblaApi2)

    const onNext = () => {
        onNextButtonClick()
        onNextButtonClick2()
    }

    const onPrevious = () => {
        onPrevButtonClick()
        onPrevButtonClick2()
    }

    return (
        <div className="embla flex flex-row pl-216px">
            <div className={'flex-1 flex-col'}>
                <div className="embla__viewport embla-text w-auto" ref={emblaRef2}>
                    <div className="embla__container">
                        {slides.map((index) => (
                            <SlideContent slide={data[index]}/>
                        ))}
                    </div>
                </div>
                <ActionContainer>
                    <PrevButton onClick={onPrevious} disabled={prevBtnDisabled}/>
                    <NextButton onClick={onNext} disabled={nextBtnDisabled}/>
                </ActionContainer>
            </div>
            <div className={`flex-1 embla__viewport embla-image w-auto ${emblaApi?.canScrollPrev() ? 'left' : ''} ${emblaApi?.canScrollNext() ? 'right' : ''}`} ref={emblaRef}>
                <div className="embla__container ">
                    {slides.map((index) => (
                        <SlidePicture index={index} selected={index === emblaApi?.selectedScrollSnap()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
