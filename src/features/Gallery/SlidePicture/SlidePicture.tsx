import React, {FunctionComponent} from "react";
import Slide from "../Slide/Slide";

interface Props {
    index: number,
    selected: boolean
}

export const SlidePicture: FunctionComponent<Props> = ({index, selected}) => {
    return (
        <Slide>
            <div className={`embla__slide__img h-full ${selected ? 'is-snapped' :''}`} key={index}>
                    <img className={"h-full w-full block object-cover rounded-[1.8rem]"}
                        alt={'image not found'} src={require(`../../../assets/${index+1}.jpg`)} />
            </div>
        </Slide>
    )
}