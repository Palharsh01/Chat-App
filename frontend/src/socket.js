import { io } from "socket.io-client";

const socket = io("https://chat-app-pawx.onrender.com", {
  transports: ["websocket"],
  withCredentials: true,
  autoConnect: true,
});

export default socket;
