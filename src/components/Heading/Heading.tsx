import {FunctionComponent, ReactNode} from "react";
import {tv} from "tailwind-variants";

interface Props{
    children?: ReactNode
}

const heading = tv({
    base: 'text-azure-500 font-medium md:text-base text-sm mb-20px',
});

export const Heading: FunctionComponent<Props> = ({children}) => {
    return (
        <h1 className={heading()}>
            {children}
        </h1>
    )
}