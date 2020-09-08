import * as React from 'react';
import { InputField } from './../components/input';
import { Button } from './../components/button';
import { useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';

export const Login: React.FunctionComponent = (props) => {
    const formRef = useRef<HTMLFormElement>(null);
    const [gotoChatRoom, setGotoChatRoom] = useState(false);
    const [username, setUsername] = useState();

    const loginButtonClickHandler = () => {
        const form = formRef.current;
        const username = form?.['username-input']?.value;
    
        setUsername(username);
        setGotoChatRoom(true);
    };

    if(gotoChatRoom) {
        return <Redirect to={
            {
                pathname: '/chat',
                state: {
                    username: username
                }
            }
        } />
    }

    return (

        <div className="login-layout">
            <div className="login-container">
                <form ref={formRef} >
                    <InputField
                        name="username-input"
                        placeholder="Type your username"
                        className="margin-bottom-two login-input"
                        maxLength={15}
                    />
                </form>
                
                <Button
                    text="Join the DoorDash Chat!"
                    className="login-button"
                    onClick={loginButtonClickHandler}
                />
            </div>
        </div>

    );
}