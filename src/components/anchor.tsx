
import * as React from 'react';

interface AnchorProps {
    text: string;
    className: string;
    href?: string;
    role?: string;
}

export const Anchor: React.FunctionComponent<AnchorProps> = ({ text, className, href, role }) => {

    return (
        <a
            type="button"
            className={className}
            href={href}
            role={role}
        >
            {text}
        </a>
    );
}