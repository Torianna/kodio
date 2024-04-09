import {FunctionComponent} from "react";

interface Props{
    text: string
}

export const Heading: FunctionComponent<Props> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}