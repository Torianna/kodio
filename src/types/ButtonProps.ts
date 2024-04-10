import React, {PropsWithChildren} from "react";

export type ButtonProps = PropsWithChildren<
    React.DetailedHTMLProps<
        React.ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
        >
    >