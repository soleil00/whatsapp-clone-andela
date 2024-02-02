import { Lock } from "@mui/icons-material";
import { Paper, Stack, Typography } from "@mui/material";
import React from "react";

const Notice = () => {
  return (
    <Paper
      elevation={0.2}
      className=" rounded-lg my-3 w-[80%] mx-auto px-4 py-2 bg-orange-200"
    >
      <Stack spacing={2} alignItems={"center"} direction={"row"}>
        <Lock />
        <Typography fontSize={"small"}>
          {" "}
          Messages are end-to-end ecnrypted no one outside this chat, not even
          soleil can read or listen to them.{" "}
          <span className="text-blue-400 italic">click here to learn more</span>
        </Typography>
      </Stack>
    </Paper>
  );
};

export default Notice;
