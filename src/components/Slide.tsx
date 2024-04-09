import React, {FunctionComponent} from "react";
import {SlideType} from "../types/slideType";
import {Description} from "./Description";
import {Title} from "./Title";
import {Heading} from "./Heading";

interface Props {
    slide: SlideType
}

export const Slide: FunctionComponent<Props> = ({slide}) => {
    return (
            <div className="embla__slide">
                <div className={"content"}>
                    <Heading text={slide?.heading}/>
                    <Title text={slide?.title}/>
                    <Description text={slide?.description}/>
                </div>
            </div>
    )
}