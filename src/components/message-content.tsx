
import * as React from 'react';

interface MessageContentProps {
    classNames: string;
    content: string
}

export const MessageContent: React.FunctionComponent<MessageContentProps> = ({classNames, content}) => {

    return (
        <div className={`message-instance-content ${classNames}`}>
            {content}
        </div>

    );
}