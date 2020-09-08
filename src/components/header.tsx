
import * as React from 'react';

interface HeaderProps {
    roomName?: string;
    users?: string[];
    currentuser?: string;
}

export const Header: React.FunctionComponent<HeaderProps> = ({ roomName, users, currentuser }) => {

    return (
        <div className="header-container">
            {roomName && <div className="header-room-name">{roomName}</div>}
            {users && <div className="header-users-list">
                <span className="text-color-red">{currentuser}, </span>
                <span>{users.join(', ')}</span>
            </div>}
        </div>
    );
}