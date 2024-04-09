import {FunctionComponent, ReactNode} from 'react'
import './ActionContainer.css'

type PropType = {
    children: ReactNode
}

const ActionContainer: FunctionComponent<PropType> = ({children}) => {
    return (
        <div className="embla__controls">
            <div className="embla__buttons">
                {children}
            </div>
        </div>
    )
}

export default ActionContainer
