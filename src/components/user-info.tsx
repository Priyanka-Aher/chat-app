import * as React from 'react';


interface UserInfoContainerProps {
    username: string;
}

/**
 * Username and timer
 */
export const UserInfoContainer : React.FunctionComponent<UserInfoContainerProps> = ({username}) => {

    const className = " text-size-400 text-color-white user-info-container";



    return (
        <>
            <span className={className}>{username}</span>
        </>
    );
}