"use server"

import * as signalR from '@microsoft/signalr';
import { baseChatHubURL } from '.';
import { HttpTransportType } from '@microsoft/signalr';

const createSignalRConnection = (token: string) => {
    const connection = new signalR.HubConnectionBuilder()
        .withUrl(baseChatHubURL, {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
            accessTokenFactory: () => token
        })
        .withAutomaticReconnect() // Automatically reconnect on disconnect
        .configureLogging(signalR.LogLevel.Information) // Optional: For debugging
        .build();

    return connection;
};

export default createSignalRConnection;