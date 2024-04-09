import {DetailedHTMLProps, FunctionComponent, HTMLAttributes, PropsWithChildren} from 'react'
import {tv} from "tailwind-variants";

type PropType = PropsWithChildren<DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>> & {
    variant?: 'title'
}

const text = tv({
    base: 'text-french-gray-700 font-normal text-xl',
    variants: {
        variant: {
            title: 'text-space-950 font-bold text-4xl mb-32px'
        }
    }
});

const Text: FunctionComponent<PropType> = (props) => {
    const {children, variant, ...restProps} = props

    return (
        <p className={text({variant})} {...restProps}>
            {children}
        </p>
    )
}
export default Text
