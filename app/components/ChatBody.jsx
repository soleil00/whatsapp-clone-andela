"use client";

import React, { useContext, useState } from "react";
import Notice from "./Notice";
import Message from "./Message";
import { messages } from "@/constants/messages";
import { SoleilContext } from "../context/MessageContext";

const ChatBody = () => {
  const { state, sendMessage } = useContext(SoleilContext);

  return (
    <div className=" h-[79vh] overflow-y-scroll px-4 soleil3">
      {/* bg-gray-300 */}
      <Notice />

      {state.messages?.map((message) => (
        <Message message={message} key={message.text} />
      ))}
    </div>
  );
};

export default ChatBody;
