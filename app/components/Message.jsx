import { Receipt, Verified } from "@mui/icons-material";
import { Paper } from "@mui/material";
import Image from "next/image";
import React from "react";

const Message = ({ message }) => {
  return (
    <div>
      <Paper
        className={`rounded-lg relative text-[16px] ${
          message.position === "right" ? "bg-green-100" : ""
        } px-2 py-1 max-w-[40%] w-auto mb-1 ${
          message.position === "right" ? "ml-auto" : "mr-auto"
        }`}
      >
        {/* {message.text} */}
        {message.image ? (
          <Image
            src={message.image}
            width={50}
            height={40}
            alt="image"
            style={{ width: "100%", height: "auto" }}
          />
        ) : (
          message.text
        )}
        <span className="absolute right-1 bottom-0 text-[9px]">
          11:34
          {message.position === "right" && <Verified fontSize={"small"} />}
        </span>
      </Paper>
    </div>
  );
};

export default Message;
