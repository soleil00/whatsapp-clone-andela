"use client";

import { Add, EmojiEmotions, MusicNote, Send } from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { SoleilContext } from "../context/MessageContext";

const ChatFunctions = () => {
  const [message, setMesssage] = useState("");
  const [position, setPosition] = useState("right");
  const [index, setIndex] = useState(1);
  const { addMessage } = useContext(SoleilContext);

  const handlePosition = () => {
    if (index % 2 === 0) {
      setPosition("left");
    } else {
      setPosition("right");
    }
  };
  const handleSoleil = () => {
    if (message !== "") {
      addMessage(message, position);
      setMesssage("");
      setIndex((i) => i + 1);
      handlePosition();
    }
  };

  return (
    <div className=" absolute bottom-0 bg-gray-100 w-full items-center flex  header  rounded-br-lg p-2 h-[50px]">
      {/* bg-gray-100 */}
      <EmojiEmotions className="mr-2" />
      <Add className="mr-2" />
      <input
        value={message}
        onChange={(e) => setMesssage(e.target.value)}
        type="text"
        placeholder="Enter message"
        className="w-[60%] rounded-xl focus:outline-none px-4 py-2 mx-auto"
      />

      <MusicNote className="ml-auto mr-2" />
      <Send onClick={handleSoleil} />
    </div>
  );
};

export default ChatFunctions;
