"use client";

import { messages } from "@/constants/messages";
import React, { createContext, useReducer } from "react";

export const SoleilContext = createContext();

const messageReducer = (state, action) => {
  switch (action.type) {
    case "sendMessage":
      {
        return {
          ...state,
          messages: [
            ...state.messages,
            { text: action.payload, position: action.position },
          ],
        };
      }
      break;

    default: {
      return [...state];
    }
  }
};

const initialState = { messages: [...messages] };

const MessageContext = ({ children }) => {
  const [state, dispatch] = useReducer(messageReducer, initialState);

  function addMessage(message, position) {
    dispatch({ type: "sendMessage", payload: message, position: position });
  }
  return (
    <SoleilContext.Provider value={{ state, addMessage }}>
      {children}
    </SoleilContext.Provider>
  );
};

export default MessageContext;
