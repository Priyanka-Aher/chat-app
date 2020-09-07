import * as React from 'react';
import { Button } from './../components/button';
import { useState, useEffect } from 'react';
import { RoomsData, Messages } from './../types/RoomsData';
import { RouteComponentProps } from 'react-router-dom';
import { StaticContext } from 'react-router';
import { UserInfoContainer } from '../components/user-info';

type LocationState = {
    username: string;
};

export const ChatRoom = (props: RouteComponentProps<{}, StaticContext, LocationState>) => {

    const [roomsData, setRoomsData] = useState<RoomsData[]>();
    const [hasError, setHasError] = useState(false)
    const username = props?.location.state?.username;

    console.log(`Username is ${props?.location.state.username}`);

    // on page load fetch rooms data  
    useEffect(() => {
        fetch("http://localhost:8080/api/rooms")
            .then(async res => {
                const data = await res.json();
                setRoomsData(data);
            })
            .catch(err => {
                console.error(`Error fetching rooms data ${err} make sure the server is running!`);
                setHasError(true)
            })
    }, []);

    /**
     * [{"name":"Tea Chats","id":0},{"name":"Coffee Chats","id":1}]
     */

    // use the rooms data and create the UI

    return (
        <div className="chat-page-layout">
            <div className="sidebar-container">
                <UserInfoContainer username={username} />
                <div className="rooms-container text-color-white">
                    {roomsData && Array.isArray(roomsData) && roomsData.map((room) => {
                        return (
                            <Button
                                className="text-color-white border-theme-no-border background-color-red room-buttons text-size-200"
                                text={room.name}
                                key={`room-${room.id}`}
                            />
                        )
                    })
                    }
                </div>
            </div>

            <div className="chats-container">
                <p>
                    Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.
                    Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.
                    Sass variables are simple: you assign a value to a name that begins with $, and then you can refer to that name instead of the value itself. But despite their simplicity, they're one of the most useful tools Sass brings to the table. Variables make it possible to reduce repetition, do complex math, configure libraries, and much more.

            </p>

            </div>
        </div>
    );
}