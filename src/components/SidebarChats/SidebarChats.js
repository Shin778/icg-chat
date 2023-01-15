import React from "react";
import {
    Chats,
    RecentChat,
    AvatarBox,
    RecentChatTittle,
    RecentChatSubtitle,
    RecentChatDate,
  } from "./SidebarChats.styled";
;



function SidebarChats() {
    return (
        <Chats>
            <RecentChat>
                <AvatarBox/>
                <RecentChatTittle>Избранное</RecentChatTittle>
                <RecentChatSubtitle>Text</RecentChatSubtitle>
                <RecentChatDate>14.12.2022</RecentChatDate>
            </RecentChat>
        </Chats>
    )
}

export default SidebarChats