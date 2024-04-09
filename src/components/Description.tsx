import {FunctionComponent} from "react";

interface Props{
    text: string
}

export const Description: FunctionComponent<Props> = ({text}) => {
    return (
     <div>
         {text}
     </div>
    )
}