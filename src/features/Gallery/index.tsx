import React, {FunctionComponent} from 'react'
import './index.css'
import {EmblaOptionsType} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import data from '../../data/slidesData.json'
import {SlideContent} from "./SlideContent/SlideContent";
import {SlidePicture} from "./SlidePicture/SlidePicture";
import ActionContainer from "./ActionContainer/ActionContainer";
import {useEmblaActions} from "../../hooks/useEmblaActions";
import {tv} from "tailwind-variants";
import Button from "../../components/Button/Button";
import LeftArrow from "../../assets/icons/LeftArrow";
import RightArrow from "../../assets/icons/RightArrow";

type PropType = {
    slides: number[]
    options?: EmblaOptionsType
}

const container = tv({
    base: 'flex touch-pan-y ml-[calc(var(--slide-spacing)_*_-1)]',
    variants: {
        variant: {
            picture: "h-full"
        }
    }
});

const Gallery: FunctionComponent<PropType> = (props) => {
    const {slides, options} = props
    const [emblaRefImage, emblaApiImage] = useEmblaCarousel(options)
    const [emblaRefContent, emblaApiContent] = useEmblaCarousel(options)

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = useEmblaActions(emblaApiImage)

    const {
        onPrevButtonClick: onPrevContentButtonClick,
        onNextButtonClick: onNextContentButtonClick,
    } = useEmblaActions(emblaApiContent)

    const onNext = () => {
        onNextButtonClick()
        onNextContentButtonClick()
    }

    const onPrevious = () => {
        onPrevButtonClick()
        onPrevContentButtonClick()
    }

    return (
        <div className="flex md:flex-row md:pl-[5%] flex-col">
            <div className={'flex-1'}>
                <div className={'flex-col px-[10%]'}>
                    <div className="overflow-hidden pointer-events-none embla-text w-auto" ref={emblaRefContent}>
                        <div className={container()}>
                            {slides.map((index) => (
                                <SlideContent slide={data[index]}/>
                            ))}
                        </div>
                    </div>
                    <ActionContainer>
                        <Button onClick={onPrevious} disabled={prevBtnDisabled}>
                            <LeftArrow/>
                        </Button>
                        <Button onClick={onNext} disabled={nextBtnDisabled}>
                            <RightArrow/>
                        </Button>
                    </ActionContainer>
                </div>
            </div>
            <div
                className={`flex-1 overflow-hidden pointer-events-none embla-image w-auto pl-[10%] md:pl-0 ${emblaApiImage?.canScrollPrev() ? 'left' : ''} ${emblaApiImage?.canScrollNext() ? 'right' : ''}`}
                ref={emblaRefImage}>
                <div className={container({variant: 'picture'})}>
                    {slides.map((index) => (
                        <SlidePicture index={index} selected={index === emblaApiImage?.selectedScrollSnap()}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Gallery
