
import * as React from 'react';

interface InputProps {
    placeholder?: string;
    name: string;
    type?: string;
    className?: string;
    maxLength?: number;
    ref?: any;
}

export const InputField: React.FunctionComponent<InputProps> =
    ({ placeholder = " ", name, type = "text", className, maxLength, ref }) => {

        return (
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                className={className}
                maxLength={maxLength}
                ref={ref}
            />
        );
    }