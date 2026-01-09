"use client";

import React, { useState, useEffect } from "react";
import { useStompClient } from "../hooks/useStompClient";
import { IMessage } from "@stomp/stompjs";

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: string;
}

export default function Chat() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState(
    "User" + Math.floor(Math.random() * 1000)
  );

  const { isConnected, subscribe, publish, unsubscribe } = useStompClient({
    url: "http://192.0.0.2:23000/connect",
    onConnect: () => {
      console.log("웹소켓 연결 성공");
    },
    onError: (error) => {
      console.error("연결 에러:", error);
    },
  });

  useEffect(() => {
    if (!isConnected) return;

    // 채팅방 구독
    const subscription = subscribe("/topic/chat", (message: IMessage) => {
      const chatMessage: ChatMessage = JSON.parse(message.body);
      setMessages((prev) => [...prev, chatMessage]);
    });

    return () => {
      if (subscription) {
        unsubscribe(subscription);
      }
    };
  }, [isConnected, subscribe, unsubscribe]);

  const sendMessage = () => {
    if (!inputMessage.trim() || !isConnected) return;

    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: username,
      content: inputMessage,
      timestamp: new Date().toISOString(),
    };

    // 서버로 메시지 전송
    publish("/app/chat.sendMessage", message);
    setInputMessage("");
  };

  const joinChat = () => {
    if (!isConnected) return;

    const joinMessage = {
      id: Date.now().toString(),
      sender: username,
      type: "JOIN",
      timestamp: new Date().toISOString(),
    };

    publish("/app/chat.addUser", joinMessage);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-blue-500 text-white p-4">
        <h2 className="text-xl font-semibold">실시간 채팅</h2>
        <div className="flex items-center space-x-2 mt-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isConnected ? "bg-green-400" : "bg-red-400"
            }`}
          ></span>
          <span className="text-sm">
            {isConnected ? "연결됨" : "연결 안됨"}
          </span>
        </div>
      </div>

      <div className="p-4">
        {/* 사용자명 입력 */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            사용자명:
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={joinChat}
              disabled={!isConnected}
              className="px-4 py-2 bg-green-500 text-white rounded-md disabled:bg-gray-300"
            >
              입장
            </button>
          </div>
        </div>

        {/* 메시지 목록 */}
        <div className="h-64 overflow-y-auto border border-gray-300 rounded-md p-3 mb-4 bg-gray-50">
          {messages.map((msg) => (
            <div key={msg.id} className="mb-2">
              <div className="text-sm">
                <span className="font-semibold text-blue-600">
                  {msg.sender}
                </span>
                <span className="text-gray-500 text-xs ml-2">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span>
              </div>
              <div className="text-gray-800">{msg.content}</div>
            </div>
          ))}
        </div>

        {/* 메시지 입력 */}
        <div className="flex space-x-2">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="메시지를 입력하세요..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={!isConnected}
          />
          <button
            onClick={sendMessage}
            disabled={!isConnected || !inputMessage.trim()}
            className="px-4 py-2 bg-blue-500 text-white rounded-md disabled:bg-gray-300"
          >
            전송
          </button>
        </div>
      </div>
    </div>
  );
}
