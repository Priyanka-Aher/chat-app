
import * as React from 'react';
import { Message } from './../types/__types';
import { MessageInstance } from './message-instance';

interface MessageWindowProps {
    messages: Message[] | undefined;
    currentuser: string;
}

export const MessageWindow: React.FunctionComponent<MessageWindowProps> = ({ messages, currentuser }) => {

    return (
        <div className="messages-container">
            {messages && Array.isArray(messages) && messages.map(messageInstance => {
                return (
                    <MessageInstance
                        messageInstance={messageInstance}
                        myMessage={messageInstance.name === currentuser}
                    />
                )
            })}
        </div>
    );
}