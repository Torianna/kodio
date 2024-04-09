import React, {FunctionComponent} from "react";
import {SlideType} from "../../types/slideType";
import {Heading} from "../../components/Heading/Heading";
import Text from "../../components/Text/Text";

interface Props {
    slide: SlideType
}

export const SlideContent: FunctionComponent<Props> = ({slide}) => {
    return (
            <div className="embla__slide">
                <div className={"text-left "}>
                    <Heading>
                        {slide?.heading}
                    </Heading>
                    <Text variant={'title'}>
                        {slide?.title}
                    </Text>
                    <Text>
                        {slide?.description}
                    </Text>
                </div>
            </div>
    )
}