import React, {
    PropsWithChildren,
    useCallback,
    useEffect,
    useState
} from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import '../../embla.css'
import {tv} from "tailwind-variants";
import Button from "../../components/Button/Button";
import LeftArrow from "../../assets/icons/LeftArrow";
import RightArrow from "../../assets/icons/RightArrow";

type UsePrevNextButtonsType = {
    prevBtnDisabled: boolean
    nextBtnDisabled: boolean
    onPrevButtonClick: () => void
    onNextButtonClick: () => void
}

export const usePrevNextButtons = (
    emblaApi: EmblaCarouselType | undefined,
    onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UsePrevNextButtonsType => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true)

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollPrev()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return
        emblaApi.scrollNext()
        if (onButtonClick) onButtonClick(emblaApi)
    }, [emblaApi, onButtonClick])

    const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    }
}

type PropType = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
        >
    >

export const PrevButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <Button {...restProps}>
            <LeftArrow/>
        </Button>
    )
}

export const NextButton: React.FC<PropType> = (props) => {
    const { children, ...restProps } = props

    return (
        <Button {...restProps}>
            <RightArrow/>
        </Button>
    )
}
