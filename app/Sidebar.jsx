"use client";

import { topSidebar } from "@/constants/sidebar";
import { Info } from "@mui/icons-material";
import { Badge, Stack, Typography, Box, Avatar } from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  const [value, setValue] = useState(0);
  return (
    <Stack
      className="w-[10%] p-3 relative soleil2"
      sx={{ display: { xs: "none", sm: "none", md: "block" } }}
      spacing={4}
    >
      <Stack direction={"row"} spacing={1}>
        <div className=" h-3 w-3 rounded-full bg-orange-600"></div>
        <div className=" h-3 w-3 rounded-full bg-yellow-600"></div>
        <div className=" h-3 w-3 rounded-full bg-green-600"></div>
      </Stack>
      <Stack spacing={3}>
        {topSidebar.map((item, i) => (
          <Stack
            onClick={() => setValue(i)}
            key={item.name}
            alignItems={"center"}
            className={`${
              value === i && "bg-gray-200 rounded-xl py-2 text-black"
            }`}
          >
            <Typography>
              {item.count > 0 ? (
                <Badge color="secondary" badgeContent={item.count}>
                  {item.icon}
                </Badge>
              ) : (
                item.icon
              )}
            </Typography>
            <Typography className="text-[12px]">{item.name}</Typography>
          </Stack>
        ))}
      </Stack>
      <Stack
        alignItems={"center"}
        spacing={2}
        className=" absolute bottom-2 right-[50%] left-[50%] "
      >
        <Info />
        <Avatar variant="square" className=" w-[60px] h-[60px] rounded-md">
          SR
        </Avatar>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
