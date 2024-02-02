"use client";

import { contacts } from "@/constants/contacts";
import { Verified } from "@mui/icons-material";
import { Avatar, Stack, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactCard = () => {
  const [value, setValue] = useState(0);

  return (
    <>
      {contacts.map((contact, i) => (
        <div
          key={i}
          className={`flex items-center p-1 mb-3 ${
            value === i ? " bg-gray-200 rounded-md " : ""
          }`}
          onClick={() => setValue(i)}
        >
          <Avatar className=" mr-3 h-[40px] w-[40px]">{contact.image}</Avatar>
          <Stack>
            <Typography className="text-[14px]">{contact.chatName}</Typography>
            <Typography className="text-[14px]">
              {contact.lastMessage.message}
            </Typography>
          </Stack>
          <Stack ml={"auto"} alignItems={"center"}>
            <Typography className=" text-green-500 text-[12px]">
              {contact.time}
            </Typography>
            <Typography className="w-[20px] h-[20px] text-[12px] rounded-full text-center text-white bg-green-500">
              {contact.messageCounts > 5 ? (
                "5+"
              ) : contact.lastMessage.sender === "me" ? (
                <Verified fontSize="small" />
              ) : (
                contact.messageCounts
              )}
            </Typography>
          </Stack>
        </div>
      ))}
    </>
  );
};

export default ContactCard;
