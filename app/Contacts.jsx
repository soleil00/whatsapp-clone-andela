"use client";

import React, { useState } from "react";
import ContactSearch from "./components/ContactSearch";
import ContactTop from "./components/ContactTop";
import ContactCard from "./components/ContactCard";
import { contacts } from "@/constants/contacts";
import { Badge, Box, Stack, Typography } from "@mui/material";
import { topSidebar } from "@/constants/sidebar";

const Contacts = () => {
  const [value, setValue] = useState(2);
  return (
    <Box
      className=" px-5 h-[100%] soleil2"
      sx={{ width: { md: "30%", sm: "40%", xs: "100%" } }}
    >
      <Stack
        sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
        pt={"10px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={2}
      >
        {topSidebar.map((item, i) => (
          <Stack
            onClick={() => setValue(i)}
            key={item.name}
            alignItems={"center"}
            className={`${value === i && "bg-gray-200 p-3 rounded-lg"}`}
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
      <ContactTop />
      <ContactSearch />
      {/* <div className=" overflow-y-scroll h-[84.5%]">
        {contacts.map((contact, i) => (
          <ContactCard key={contact.chatName} contact={contact} i={i} />
        ))}
      </div> */}

      <ContactCard />
    </Box>
  );
};

export default Contacts;
