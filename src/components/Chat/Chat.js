import React from "react";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import {
    ImChat,
    DialogTopbar,
    AvatarBoxFavorite,
    DialogTitle,
    SearchInChat,
    Gallery,
    Tools,
  } from "./Chat.styled";
;


function Chat(){
    return (
        <ImChat>
            <DialogTopbar>
                <AvatarBoxFavorite/>
                <DialogTitle>Избранное</DialogTitle>
                <SearchInChat/>
                <Gallery/>
                <Tools/>
            </DialogTopbar>
            <Messages/>
            <Input/>
        </ImChat>
    )
}

export default Chat