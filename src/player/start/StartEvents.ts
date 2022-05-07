import {Socket} from 'socket.io-client';

export interface StartServerSentEvents {}
export interface StartClientSentEvents {}
export type StartSocket = Socket<StartServerSentEvents, StartClientSentEvents>;

export function Register(socket: StartSocket, handler: StartServerSentEvents) {}
