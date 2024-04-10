import {FunctionComponent, ReactNode} from 'react'
import {tv} from "tailwind-variants";

type PropType = {
    children: ReactNode
}

const outerCol = tv({
    base: 'grid grid-cols-[auto_1fr] justify-between gap-[1.2rem] mt-[1.8rem] mb-[1.8rem] md:mb-[0rem]',
});

const innerCol = tv({
    base: 'grid grid-cols-[repeat(2,1fr)] gap-[0.6rem] items-center',
});

const ActionContainer: FunctionComponent<PropType> = ({children}) => {
    return (
        <div className={outerCol()}>
            <div className={innerCol()}>
                {children}
            </div>
        </div>
    )
}

export default ActionContainer
