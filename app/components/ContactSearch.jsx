"use client";

import { Filter, Search } from "@mui/icons-material";
import { InputAdornment, TextField } from "@mui/material";
import React from "react";

const ContactSearch = () => {
  return (
    <div className=" my-2 bg-gray-300 rounded-lg p-2 justify-between w-full">
      <Search fontSize="small" className=" mr-1" />
      <input
        type="text"
        placeholder="Search or start new chat"
        className=" w-[80%] focus:outline-none bg-gray-300"
      />
      <Filter fontSize="small" className=" ml-auto" />
    </div>
  );
};

export default ContactSearch;
