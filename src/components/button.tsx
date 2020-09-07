
import * as React from 'react';

interface ButtonProps {
    text: string;
    className: string;
    onClick?: () => void;
}

export const Button: React.FunctionComponent<ButtonProps> = ({ text, className, onClick }) => {

    return (
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
            {text}
        </button>
    );
}