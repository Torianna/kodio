import React, {FunctionComponent} from "react";
import Slide from "./Slide/Slide";

interface Props {
    index: number,
    selected: boolean
}

export const SlidePicture: FunctionComponent<Props> = ({index, selected}) => {
    return (
        <Slide>
        <div className={`embla__class-names embla__slide__img ${selected ? 'is-snapped' :''}`} key={index}>
                <img
                    alt={'image not found'} src={require(`../../assets/${index+1}.jpg`)} />
        </div>
        </Slide>
    )
}