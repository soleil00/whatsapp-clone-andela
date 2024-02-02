"use client";

import React from "react";
import ChatHeader from "./components/ChatHeader";
import ChatBody from "./components/ChatBody";
import ChatFunctions from "./components/ChatFunctions";
import { Box } from "@mui/material";

const Chats = () => {
  return (
    <Box
      className=" w-[60%] relative"
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <ChatHeader />
      <ChatBody />
      <ChatFunctions />
    </Box>
  );
};

export default Chats;
