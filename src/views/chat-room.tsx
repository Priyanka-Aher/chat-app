import * as React from 'react';
import { Button } from './../components/button';
import { useState, useEffect } from 'react';
import { Room, Message } from './../types/__types';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import { UserInfoContainer } from '../components/user-info';
import { Header } from './../components/header';
import { InputField } from './../components/input';
import { MessageWindow } from './../components/message-window';
import {useRef} from 'react';

type LocationState = {
    username: string;
};

export const ChatRoom = (props: RouteComponentProps<{}, StaticContext, LocationState>) => {

    const [roomsData, setRoomsData] = useState<Room[]>();
    const [selectedRoom, setSelectedRoom] = useState<Room>();
    const [users, setUsers] = useState<string[]>();
    const [hasError, setHasError] = useState(false);
    const [messages, setMessages] = useState<Message[]>();
    const [newMessage, setNewMessage] = useState<Message>();
    const formRef = useRef<HTMLFormElement>(null);
    const username = props?.location.state?.username;

    console.log(`Username is ${props?.location.state.username}`);

    // on page load fetch rooms data  
    useEffect(() => {
        fetch("http://localhost:8080/api/rooms")
            .then(async res => {
                const data = await res.json();
                setSelectedRoom(data[0]);
                setRoomsData(data);
            })
            .catch(err => {
                console.error(`Error fetching rooms data ${err} make sure the server is running!`);
                setHasError(true)
            })
    }, []);


    useEffect(() => {
        fetch(`http://localhost:8080/api/rooms/${selectedRoom?.id}`)
            .then(async res => {
                const data = await res.json();
                console.log(`data is ${JSON.stringify(data)}`);
                setUsers(data.users);

                fetch(`http://localhost:8080/api/rooms/${selectedRoom?.id}/messages`)
                    .then(async res => {
                        const data = await res.json();
                        console.log(`data is ${JSON.stringify(data)}`);
                        setMessages(data);
                    })
                    .catch(err => {
                        console.error(`Error fetching messages data ${err} make sure the server is running. Try again. (:-/)`);
                        setHasError(true);
                    })
            })
            .catch(err => {
                console.error(`Error fetching rooms data ${err} make sure the server is running!`);
                setHasError(true);
            })
    }, [selectedRoom]);


    /**
     * [{"name":"Tea Chats","id":0},{"name":"Coffee Chats","id":1}]
     */

    // use the rooms data and create the UI

    const roomClickHandler = (room: Room) => {
        setSelectedRoom(room);
    };

    const inputFieldOnBlur = (event: any) => {
        setNewMessage({
            id: '',
            message: event.target.value,
            name: username,
            reaction: null
        });

    }

    const sendMessageClickHandler = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: username,
                message: newMessage?.message
            })
        };

        fetch(`http://localhost:8080/api/rooms/${selectedRoom?.id}/messages`, requestOptions)
            .then(async res => {
                const data = await res.json();
                console.log(`data is ${JSON.stringify(data)}`);
                setMessages(state => state ? [...state, data] : [data]);   
                setNewMessage(undefined); // do I need this?
                formRef.current?.reset();
            })
            .catch(err => {
                console.error(`Error sending message ${err} make sure the server is running and try again!`);
                setHasError(true);
            })
    }

    return (
        <div className="chat-page-layout">
            <div className="sidebar">
                <UserInfoContainer username={username} />
                <div className="rooms-container text-color-white">
                    {roomsData && Array.isArray(roomsData) && roomsData.map((room) => {
                        return (
                            <Button
                                className="text-color-white border-theme-no-border background-color-red room-buttons text-size-200"
                                text={room.name}
                                key={`room-${room.id}`}
                                onClick={() => roomClickHandler(room)}
                            />
                        )
                    })
                    }
                </div>
            </div>

            <div className="main-body">
                <Header roomName={selectedRoom?.name} users={users} currentuser={username}/>
                <MessageWindow messages={messages} currentuser={username} />
                <form className="footer-container" ref={formRef}>
                    <InputField name="message-field" onBlur={inputFieldOnBlur} />
                    <Button text="Send" className="" onClick={sendMessageClickHandler} />
                </form>

            </div>
        </div>
    );
}