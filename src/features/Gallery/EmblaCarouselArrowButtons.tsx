import React, {
    PropsWithChildren
} from 'react'
import '../../embla.css'
import Button from "../../components/Button/Button";
import LeftArrow from "../../assets/icons/LeftArrow";
import RightArrow from "../../assets/icons/RightArrow";


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
