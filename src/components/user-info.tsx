import * as React from 'react';


interface UserInfoContainerProps {
    username: string;
}

/**
 * Username and timer
 */
export const UserInfoContainer : React.FunctionComponent<UserInfoContainerProps> = ({username}) => {

    const className = "user-info-container text-size-400 text-color-white ";

    return (
        <div className={className}>
            <span>{username}</span>
        </div>
    );
}