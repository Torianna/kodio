import {ButtonHTMLAttributes, DetailedHTMLProps, FunctionComponent, PropsWithChildren} from 'react'
import {tv} from "tailwind-variants";

type PropType = PropsWithChildren<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement>>

const button = tv({
    base: 'w-14 h-14 border-solid rounded-full border-2 flex justify-center items-center border-azure-400 bg-azure-400',
    variants: {
        disabled: {
            true: 'bg-transparent pointer-events-none text-azure-400'
        }
    }
});

export const Button: FunctionComponent<PropType> = (props) => {
    const {children, ...restProps} = props

    return (
        <button
            className={button({disabled: props.disabled})}
            type="button"
            {...restProps}
        >
            {children}
        </button>
    )
}
export default Button
