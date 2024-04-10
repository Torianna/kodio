import React, {FunctionComponent, ReactNode} from "react";
import {tv} from "tailwind-variants";
import './Slide.css'

interface Props {
    children: ReactNode
}

const container = tv({
    base: 'text-left',
});

const Slide: FunctionComponent<Props> = ({children}) => {
    return (
            <div className={`${container()} embla__slide min-w-0`}>
                {children}
            </div>
    )
}

export default Slide