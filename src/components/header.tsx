
import * as React from 'react';

interface HeaderProps {
    roomName?: string;
    users?: string[];
}

export const Header: React.FunctionComponent<HeaderProps> = ({ roomName, users }) => {

    return (
        <div className="header-container">
            {roomName && <div className="header-room-name">{roomName}</div>}
            {users && <div className="header-users-list">{users.join(', ')}</div>}
        </div>
    );
}