import React from "react";
import Message from "../Message/Message";
import {
    AllMessages,
  } from "./Messages.styled";
;

function Messages() {
    return (
        <AllMessages>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </AllMessages>
    )
}

export default Messages;