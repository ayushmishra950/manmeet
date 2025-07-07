// import React, { useState, useEffect } from 'react';
// import { MagnifyingGlassIcon, PhoneIcon, VideoCameraIcon, EllipsisVerticalIcon, PaperClipIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';
// import axios from 'axios';
// import { gql } from '@apollo/client';

// const ChatList = ({ activeTab }) => {
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [chats, setChats] = useState([]);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [messages, setMessages] = useState([]);


// const getUser = async () => {
//   try {
//     const query = `
//       query {
//         users {
//           id
//           name
//           profileImage
//         }
//       }
//     `;

//     const response = await axios.post(
//       "http://localhost:5000/graphql",
//       { query },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//         withCredentials: true,
//       }
//     );

//     console.log("User data:", response.data.data.users); // ✅ Access actual user data
//   } catch (error) {
//     console.log(error.response?.data?.errors?.[0]?.message || "Unknown error");
//   }
// };

// useEffect(() => {
//   getUser();
// }, []);


//   // Sample messages for demonstration
//   const sampleMessages = {
//     1: [
//       { id: 1, text: "Hey, how are you?", sender: "them", time: "10:30 AM" },
//       { id: 2, text: "I'm good, thanks! How about you?", sender: "me", time: "10:31 AM" },
//       { id: 3, text: "Doing great! Just working on some new features.", sender: "them", time: "10:32 AM" },
//       { id: 4, text: "That sounds interesting! What kind of features?", sender: "me", time: "10:33 AM" },
//       { id: 5, text: "Mostly UI improvements and some new animations.", sender: "them", time: "10:34 AM" }
//     ],
//     2: [
//       { id: 1, text: "See you tomorrow!", sender: "them", time: "9:45 AM" },
//       { id: 2, text: "Yes, looking forward to it!", sender: "me", time: "9:46 AM" }
//     ],
//     3: [
//       { id: 1, text: "The meeting is at 2 PM", sender: "them", time: "Yesterday" },
//       { id: 2, text: "Got it, I'll be there!", sender: "me", time: "Yesterday" }
//     ],
//     4: [
//       { id: 1, text: "Thanks for your help!", sender: "them", time: "Yesterday" },
//       { id: 2, text: "No problem, happy to help!", sender: "me", time: "Yesterday" }
//     ],
//     5: [
//       { id: 1, text: "Can we reschedule?", sender: "them", time: "Monday" },
//       { id: 2, text: "Sure, what time works for you?", sender: "me", time: "Monday" }
//     ]
//   };

//   const regularChats = [
//     {
//       id: 1,
//       name: 'Sarah Wilson',
//       avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
//       lastMessage: 'Hey, how are you?',
//       lastMessageTime: '10:30 AM',
//       unread: 2,
//       status: 'Online',
//       profile: {
//         bio: 'Software Developer | Coffee Lover',
//         location: 'New York, USA',
//         joined: '2023'
//       }
//     },
//     {
//       id: 2,
//       name: 'Michael Brown',
//       avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
//       lastMessage: 'See you tomorrow!',
//       lastMessageTime: '9:45 AM',
//       unread: 0,
//       status: 'Last seen 5m ago',
//       profile: {
//         bio: 'UX Designer | Travel Enthusiast',
//         location: 'London, UK',
//         joined: '2022'
//       }
//     },
//     {
//       id: 3,
//       name: 'Emma Davis',
//       avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
//       lastMessage: 'The meeting is at 2 PM',
//       lastMessageTime: 'Yesterday',
//       unread: 1,
//       status: 'Online',
//       profile: {
//         bio: 'Marketing Manager | Foodie',
//         location: 'Paris, France',
//         joined: '2023'
//       }
//     },
//     {
//       id: 4,
//       name: 'James Wilson',
//       avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
//       lastMessage: 'Thanks for your help!',
//       lastMessageTime: 'Yesterday',
//       unread: 0,
//       status: 'Last seen 1h ago',
//       profile: {
//         bio: 'Product Manager | Tech Enthusiast',
//         location: 'San Francisco, USA',
//         joined: '2022'
//       }
//     },
//     {
//       id: 5,
//       name: 'Sophia Chen',
//       avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
//       lastMessage: 'Can we reschedule?',
//       lastMessageTime: 'Monday',
//       unread: 3,
//       status: 'Online',
//       profile: {
//         bio: 'Data Scientist | Yoga Instructor',
//         location: 'Tokyo, Japan',
//         joined: '2023'
//       }
//     }
//   ];

//   const groupChats = [
//     {
//       id: 101,
//       name: 'Design Team',
//       avatar: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=150&h=150&fit=crop',
//       lastMessage: 'Meeting at 3 PM',
//       lastMessageTime: '11:30 AM',
//       memberCount: 8,
//       profile: {
//         description: 'Official design team discussion group',
//         created: '2023',
//         admin: 'Sarah Wilson'
//       }
//     },
//     {
//       id: 102,
//       name: 'Project Alpha',
//       avatar: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=150&h=150&fit=crop',
//       lastMessage: 'New features discussion',
//       lastMessageTime: '10:15 AM',
//       memberCount: 12,
//       profile: {
//         description: 'Project Alpha development team',
//         created: '2023',
//         admin: 'Michael Brown'
//       }
//     }
//   ];

//   useEffect(() => {
//     setSelectedChat(null);
//   }, [activeTab]);

//   useEffect(() => {
//     const initialChats = activeTab === 'all' ? regularChats : groupChats;
//     setChats(initialChats);
//   }, [activeTab]);

//   useEffect(() => {
//     if (selectedChat) {
//       setMessages(sampleMessages[selectedChat.id] || []);
//     }
//   }, [selectedChat]);

//   const handleChatSelect = (chat) => {
//     setIsAnimating(true);
//     setSelectedChat(chat);
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 300);
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-full">
//       {/* Chat List */}
//       <div className={`w-full md:w-1/3 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-300 ease-in-out md:ml-8 ${
//         selectedChat ? 'hidden md:block' : 'block'
//       }`}>
//         <div className="overflow-y-auto h-full custom-scrollbar">
//           {chats.map((chat) => (
//             <div
//               key={chat.id}
//               onClick={() => handleChatSelect(chat)}
//               className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50/80 ${
//                 selectedChat?.id === chat.id ? 'bg-purple-50' : ''
//               }`}
//             >
//               <div className="flex items-center w-full">
//                 <div className="relative flex-shrink-0">
//                   <img
//                     src={chat.avatar}
//                     alt={chat.name}
//                     className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
//                   />
//                   {chat.unread > 0 && (
//                     <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
//                       {chat.unread}
//                     </span>
//                   )}
//                   {activeTab === 'all' && (
//                     <span className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
//                       chat.status === 'Online' ? 'bg-green-500' : 'bg-gray-400'
//                     }`}></span>
//                   )}
//                 </div>
//                 <div className="ml-3 flex-1 min-w-0">
//                   <div className="flex justify-between items-start">
//                     <div className="flex-1 min-w-0">
//                       <h3 className="text-sm font-semibold text-gray-900 truncate">{chat.name}</h3>
//                       <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
//                     </div>
//                     <div className="flex flex-col items-end ml-2">
//                       <span className="text-xs text-gray-500 whitespace-nowrap">{chat.lastMessageTime}</span>
//                       {chat.unread > 0 && (
//                         <span className="mt-1 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                           {chat.unread}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       {selectedChat ? (
//         <div className={`flex-1 flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:ml-8 md:mr-4 overflow-hidden transform transition-all duration-300 ease-in-out ${
//           isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
//         }`}>
//           {/* Chat Header */}
//           <div className="flex-none border-b border-gray-100 p-4 flex items-center justify-between bg-white">
//             <div className="flex items-center">
//               <button 
//                 onClick={() => setSelectedChat(null)}
//                 className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
//               >
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
//                   <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
//                 </svg>
//               </button>
//               <img
//                 src={selectedChat.avatar}
//                 alt={selectedChat.name}
//                 className="w-12 h-12 rounded-full ring-2 ring-purple-100"
//               />
//               <div className="ml-3">
//                 <h2 className="text-lg font-semibold text-gray-900">{selectedChat.name}</h2>
//                 <p className="text-sm text-purple-600">
//                   {activeTab === 'groups' ? `${selectedChat.memberCount} members` : selectedChat.status}
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center space-x-2 mb-[80px] md:mb-0">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                 <PhoneIcon className="h-5 w-5 text-gray-600" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                 <VideoCameraIcon className="h-5 w-5 text-gray-600" />
//               </button>
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                 <EllipsisVerticalIcon className="h-5 w-5 text-gray-600" />
//               </button>
//             </div>
//           </div>

//           {/* Chat Messages - Scrollable area */}
//           <div className="flex-1 overflow-y-auto p-4 custom-scrollbar min-h-0">
//             <div className="space-y-4">
//               {messages.map((message) => (
//                 <div
//                   key={message.id}
//                   className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
//                 >
//                   <div className={`max-w-[70%] ${message.sender === 'me' ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-2`}>
//                     <p className="text-sm">{message.text}</p>
//                     <span className={`text-xs mt-1 block ${message.sender === 'me' ? 'text-purple-200' : 'text-gray-500'}`}>
//                       {message.time}
//                     </span>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Chat Input - Fixed at bottom */}
//           <div className="flex-none border-t border-gray-100 p-4 bg-white">
//             <div className="flex items-center space-x-2">
//               <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
//                 <PaperClipIcon className="h-5 w-5 text-gray-600" />
//               </button>
//               <input
//                 type="text"
//                 placeholder="Type a message..."
//                 className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
//               />
//               <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200">
//                 <PaperAirplaneIcon className="h-5 w-5" />
//               </button>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="hidden md:flex flex-1 items-center justify-center bg-white ml-8 mr-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
//           <div className="text-center animate-fadeIn">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//             </svg>
//             <h3 className="mt-2 text-sm font-semibold text-gray-900">No chat selected</h3>
//             <p className="mt-1 text-sm text-gray-500">Select a chat to start messaging</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList; 



















// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const ChatList = () => {
//   const [users, setUsers] = useState([]);
//   const [selectedChat, setSelectedChat] = useState(null);
//   const [messages, setMessages] = useState([]);

//   // Sample dummy messages by default for all users
//   const fallbackMessages = [
//     { id: 1, text: "Hi there!", sender: "them", time: "10:00 AM" },
//     { id: 2, text: "Hello 👋", sender: "me", time: "10:01 AM" },
//   ];

//   const getUser = async () => {
//     try {
//       const query = `
//         query {
//           users {
//             id
//             name
//             profileImage
//           }
//         }
//       `;

//       const response = await axios.post(
//         "http://localhost:5000/graphql",
//         { query },
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );

//       setUsers(response.data.data.users);
//     } catch (error) {
//       console.log(error.response?.data?.errors?.[0]?.message || "Unknown error");
//     }
//   };

//   useEffect(() => {
//     getUser();
//   }, []);

//   const handleUserClick = (user) => {
//     setSelectedChat(user);
//     setMessages(fallbackMessages); // show fallback for all users
//   };

//   return (
//     <div className="flex flex-col md:flex-row h-full">
//       {/* User List */}
//       <div className={`w-full md:w-1/3 bg-white rounded-2xl shadow-lg overflow-hidden md:ml-8 ${selectedChat ? 'hidden md:block' : 'block'}`}>
//         <div className="overflow-y-auto h-full custom-scrollbar">
//           {users.map((user) => (
//             <div
//               key={user.id}
//               onClick={() => handleUserClick(user)}
//               className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50 ${
//                 selectedChat?.id === user.id ? 'bg-purple-50' : ''
//               }`}
//             >
//               <div className="flex items-center w-full">
//                 <div className="relative flex-shrink-0">
//                   <img
//                     src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
//                     alt={user.name}
//                     className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
//                   />
//                   <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white bg-green-500"></span>
//                 </div>
//                 <div className="ml-3 flex-1 min-w-0">
//                   <h3 className="text-sm font-semibold text-gray-900 truncate">{user.name}</h3>
//                   <p className="text-sm text-gray-500 truncate">Tap to chat</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Chat Area */}
//       {selectedChat ? (
//         <div className="flex-1 bg-white rounded-2xl shadow-lg md:ml-8 md:mr-4 overflow-hidden flex flex-col">
//           {/* Header */}
//           <div className="p-4 border-b flex items-center space-x-3 bg-white">
//             <button
//               onClick={() => setSelectedChat(null)}
//               className="md:hidden p-2 bg-gray-100 rounded-full"
//             >
//               ←
//             </button>
//             <img
//               src={selectedChat.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedChat.name)}`}
//               alt={selectedChat.name}
//               className="w-10 h-10 rounded-full object-cover"
//             />
//             <h2 className="text-lg font-semibold">{selectedChat.name}</h2>
//           </div>

//           {/* Messages */}
//           <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
//             {messages.length === 0 ? (
//               <p className="text-gray-400 text-center">No messages yet</p>
//             ) : (
//               <div className="space-y-3">
//                 {messages.map((msg) => (
//                   <div key={msg.id} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
//                     <div className={`px-4 py-2 rounded-2xl text-sm ${msg.sender === 'me' ? 'bg-purple-600 text-white' : 'bg-white border'}`}>
//                       <p>{msg.text}</p>
//                       <span className="text-xs text-gray-400 block mt-1">{msg.time}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Input */}
//           <div className="p-4 border-t bg-white">
//             <input
//               type="text"
//               placeholder="Type a message..."
//               className="w-full border rounded-full px-4 py-2 text-sm text-gray-500 bg-gray-100"
//             />
//           </div>
//         </div>
//       ) : (
//         <div className="hidden md:flex flex-1 items-center justify-center bg-white ml-8 mr-4 rounded-2xl shadow-lg">
//           <div className="text-center">
//             <h3 className="text-sm font-semibold text-gray-900">No chat selected</h3>
//             <p className="text-sm text-gray-500">Select a user to start messaging</p>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChatList;






































import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  PhoneIcon,
  VideoCameraIcon,
  EllipsisVerticalIcon,
  PaperClipIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import { GetTokenFromCookie } from '../getToken/GetToken';
import socket from "../socket_io/Socket";
import moment from 'moment';

const ChatList = ({ activeTab }) => {
  const [users, setUsers] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isAnimating, setIsAnimating] = useState(false);
  const [sender, setSender] = useState();
  const [text, setText] = useState();
  const [onlineUsers, setOnlineUsers] = useState([]);

  const sampleMessages = {
    1: [
      { id: 1, text: "Hey, how are you?", sender: "them", time: "10:30 AM" },
      { id: 2, text: "I'm good, thanks! How about you?", sender: "me", time: "10:31 AM" },
    ],
    2: [
      { id: 1, text: "See you tomorrow!", sender: "them", time: "9:45 AM" },
      { id: 2, text: "Yes, looking forward to it!", sender: "me", time: "9:46 AM" }
    ]
  };

  // const isOnline = onlineUsers.includes(selectedChat?.id);
  useEffect(() => {
  socket.on("updateOnlineUsers", (users) => {
    const onlineSet = new Set(users); // ✅ fast lookup set
    setOnlineUsers(onlineSet);
    
    // setOnlineUsers(users); // 🟢 update karo
  });

  return () => {
    socket.off("updateOnlineUsers");
  };
}, []);

  useEffect(() => {
    const decodedUser = GetTokenFromCookie(); // JWT se user decode
    if (decodedUser?.id) {
      setSender({ ...decodedUser, id: decodedUser.id.toString() });
      socket.emit("join", decodedUser?.id);
    }
  }, []);

  const getUser = async () => {
    try {
      const query = `
        query {
          users {
            id
            name
            profileImage
          }
        }
      `;
      const response = await axios.post(
        "http://localhost:5000/graphql",
        { query },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setUsers(response.data.data.users);
    } catch (error) {
      console.error(error.response?.data?.errors?.[0]?.message || "Unknown error");
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  let receiverId = selectedChat?.id;
  const getChat = async () => {
    if (!sender?.id || !selectedChat?.id) {
      alert("Sender ya Receiver select nahi hua");
      return;
    }

    try {
      const query = `
      query {
        getMessages(senderId: "${sender?.id}", receiverId: "${receiverId}") {
        id
      message
      sender {
        id
      }
      receiver {
        id
      }
      createdAt
        }
      }
    `;

      const response = await axios.post(
        "http://localhost:5000/graphql",
        { query },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      setMessages(response?.data?.data?.getMessages);
    } catch (error) {
      console.error(error.response?.data?.errors?.[0]?.message || "Unknown error");
    }
  };

  useEffect(() => {
    if (sender?.id && receiverId) {
      getChat();
    }
  }, [sender, receiverId]);


  const handleChatSelect = (user) => {
    setIsAnimating(true);
    setSelectedChat(user);
    setTimeout(() => setIsAnimating(false), 300);
  }

  const chat = async () => {
    if (!sender?.id || !selectedChat?.id) {
      alert("Sender ya Receiver select nahi hua");
      return;
    }
    try {
      const query = `
    mutation sendMessage($senderId: ID!, $receiverId: ID!, $message: String!) {
    sendMessage(senderId: $senderId, receiverId: $receiverId, message: $message) {
      id
      message
      createdAt
      sender {
        id
        name
      }
      receiver {
        id
        name
      }
    }
  }`
      const variables = {
        senderId: sender?.id,
        receiverId: selectedChat?.id,
        message: text,
      }
      const response = await axios.post(
        "http://localhost:5000/graphql",
        { query , variables },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
       if(response?.data?.data?.sendMessage){
getChat();
       }
      
    } catch (error) {
      console.error(error.response?.data?.errors?.[0]?.message || "Unknown error");
    }
  }

  useEffect(() => {
    if (!socket || !selectedChat?.id) return;

    const handleIncomingMessage = (msg) => {
      // sirf wahi message show karo jo current selected chat se related ho
      if (
        msg.sender.id === selectedChat.id ||
        msg.receiver.id === selectedChat.id
      ) {
        // setMessages(prev => [...prev, msg]);
        console.log(msg);

      }
    };

    socket.on("receiveMessage", handleIncomingMessage);

    // Cleanup on unmount or chat change
    return () => {
      socket.off("receiveMessage", handleIncomingMessage);
    };
  }, [selectedChat]);

  return (
    <div className="flex flex-col md:flex-row h-full">
      {/* Chat List */}
      <div className={`w-full md:w-1/3 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] overflow-hidden transition-all duration-300 ease-in-out md:ml-8 ${selectedChat ? 'hidden md:block' : 'block'
        }`}>
        <div className="overflow-y-auto h-full custom-scrollbar">
          {users.map((user) => (
            <div
              key={user.id}
              onClick={() => handleChatSelect(user)}
              className={`flex items-center p-4 cursor-pointer transition-all duration-200 hover:bg-gray-50/80 ${selectedChat?.id === user.id ? 'bg-purple-50' : ''
                }`}
            >
              <div className="flex items-center w-full">
                <div className="relative flex-shrink-0">
                  <img
                    src={user.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}`}
                    alt={user.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-purple-100"
                  />
                 {onlineUsers.has(user.id) && <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white bg-green-500"></span>}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">{user.name}</h3>
                  <p className="text-sm text-gray-500 truncate">Tap to chat</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      {selectedChat ? (
        <div className={`flex-1 flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] md:ml-8 md:mr-4 overflow-hidden transform transition-all duration-300 ease-in-out ${isAnimating ? 'scale-95 opacity-0' : 'scale-100 opacity-100'
          }`}>
          {/* Header */}
          <div className="flex-none border-b border-gray-100 p-4 flex items-center justify-between bg-white">
            <div className="flex items-center">
              <button
                onClick={() => setSelectedChat(null)}
                className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </button>
              <img
                src={selectedChat.profileImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedChat.name)}`}
                alt={selectedChat.name}
                className="w-12 h-12 rounded-full ring-2 ring-purple-100"
              />
              <div className="ml-3">
                <h2 className="text-lg font-semibold text-gray-900">{selectedChat.name}</h2>
                <p className={`text-xs ${onlineUsers.has(selectedChat?.id) ? 'text-green-500' : 'text-gray-400'}`}>{onlineUsers.has(selectedChat?.id) ? 'Online' : 'Offline'}</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-[80px] md:mb-0">
              <button className="p-2 hover:bg-gray-100 rounded-full"><PhoneIcon className="h-5 w-5 text-gray-600" /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full"><VideoCameraIcon className="h-5 w-5 text-gray-600" /></button>
              <button className="p-2 hover:bg-gray-100 rounded-full"><EllipsisVerticalIcon className="h-5 w-5 text-gray-600" /></button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 custom-scrollbar min-h-0 bg-gray-50">
            <div className="space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg?.sender?.id === sender?.id ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] ${msg?.sender?.id === sender?.id ? 'bg-purple-600 text-white' : 'bg-gray-100 text-gray-900'} rounded-2xl px-4 py-2`}>
                    <p className="text-sm">{msg.message}</p>
                    <span className={`text-xs mt-1 block text-white ${msg.sender === sender?.id ? 'text-purple-200' : 'text-gray-500'}`}>{moment(Number(msg.createdAt)).format('hh:mm A')}</span>
                    {msg?.sender?.id === sender?.id &&  <span className={`text-xs ${onlineUsers.has(selectedChat?.id) ? 'text-blue-400' : 'text-gray-300'}`}> ✓✓ </span>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="flex-none border-t border-gray-100 p-4 bg-white">
            <div className="flex items-center space-x-2">
              <button className="p-2 hover:bg-gray-100 rounded-full"><PaperClipIcon className="h-5 w-5 text-gray-600" /></button>
              <input
                type="text"
                onChange={(q) => { setText(q.target.value) }}
                placeholder="Type a message..."
                className="flex-1 border border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200">
                <PaperAirplaneIcon onClick={chat} className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex flex-1 items-center justify-center bg-white ml-8 mr-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
          <div className="text-center animate-fadeIn">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            <h3 className="mt-2 text-sm font-semibold text-gray-900">No chat selected</h3>
            <p className="mt-1 text-sm text-gray-500">Select a user to start messaging</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatList;


