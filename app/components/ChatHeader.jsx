"use client";

import {
  Call,
  KeyboardArrowDown,
  Person,
  Search,
  VideoCall,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React, { useState } from "react";

const ChatHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex justify-between bg-gray-50  items-center w-full  rounded-tr-lg pr-[20px]">
      <ListItem onClick={() => setOpen(true)}>
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar>
              <Person />
            </Avatar>
          </ListItemAvatar>
        </ListItemIcon>

        <ListItemText primary="Rukundo Soleil" secondary="online" />
      </ListItem>

      <Stack spacing={2} direction="row" alignItems={"center"}>
        <VideoCall />
        <Call />
        <div className=" h-[20px] w-[2px] bg-gray-500"></div>
        <Search />
        <KeyboardArrowDown />
      </Stack>

      <Drawer open={open} anchor="right" onClose={() => setOpen(false)}>
        <Box width={"300px"} height={"300px"}>
          soleil rukundo
        </Box>
      </Drawer>
    </div>
  );
};

export default ChatHeader;
