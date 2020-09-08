
import * as React from 'react';
import {MessageContent} from './../components/message-content';
import {Message} from './../types/__types';

interface MessageInstanceProps {
    messageInstance: Message;
    myMessage: boolean;
}

export const MessageInstance: React.FunctionComponent<MessageInstanceProps> = ({messageInstance, myMessage}) => {
    const messageInstanceClassNames = myMessage ? 'justify-content-end' : 'justify-content-start';    

    const messageContentClassNames = myMessage ? 'message-instance-content-myMessage' : 'message-instance-content-otherMessage';    

    return (
        <div className={`message-instance ${messageInstanceClassNames}`}>
            <MessageContent classNames={messageContentClassNames} content={messageInstance.message} />
            {!myMessage && <div className="message-instance-username">{messageInstance.name}</div>}
        </div>

    );
}