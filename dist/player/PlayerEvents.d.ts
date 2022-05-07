import { Socket } from 'socket.io-client';
export interface PlayerServerToClientEvents {
    OpponentDisconnected: () => void;
    Gameover: () => void;
}
export interface PlayerClientToServerEvents {
}
export declare type PlayerSocket = Socket<PlayerServerToClientEvents, PlayerClientToServerEvents>;
