import {FunctionComponent} from "react";

interface Props{
    text: string
}

export const Title: FunctionComponent<Props> = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}