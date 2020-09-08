
import * as React from 'react';
import {MessageContent} from './../components/message-content';
import {Message} from './../types/__types';

interface MessageInstanceProps {
    messageInstance: Message;
}

export const MessageInstance: React.FunctionComponent<MessageInstanceProps> = ({messageInstance}) => {

    return (
        <div className="message-instance">
            <MessageContent classNames="" content={messageInstance.message} />
            <div className="message-instance-username">{messageInstance.name}</div>
        </div>

    );
}