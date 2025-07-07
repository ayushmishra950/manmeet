// socket.js
import { io } from "socket.io-client";

const socket = io("https://manmeet.onrender.com", {
  withCredentials: true,
});

export default socket;
