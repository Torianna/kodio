import React, {FunctionComponent} from "react";
import {SlideType} from "../../../types/SlideType";
import {Heading} from "../../../components/Heading/Heading";
import Text from "../../../components/Text/Text";
import Slide from "../Slide/Slide";

interface Props {
    slide: SlideType
}

export const SlideContent: FunctionComponent<Props> = ({slide}) => {
    return (
            <Slide>
                    <Heading>
                        {slide?.heading}
                    </Heading>
                    <Text variant={'title'}>
                        {slide?.title}
                    </Text>
                    <Text>
                        {slide?.description}
                    </Text>
            </Slide>
    )
}