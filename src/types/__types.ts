export interface Room {
    name: string;
    id: number;
}

export interface Message {
    name: string;
    message: string;
    id: string;
    reaction: any;
}

/*

    name: string;
    id: number;
    users: string[];
    messages: Messages[];

*/