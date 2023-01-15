import React from "react";
import SidebarChats from "../SidebarChats/SidebarChats";
import {
    ImSidebar,
    Topbar,
    Menu,
    TopbarTitle,
    Write,
    SearchField,
  } from "./Sidebar.styled";
import Navbar from "../Navbar/Navbar";



function Sidebar() {
    return (
        <ImSidebar>
            <Topbar>
                <Menu/>
                <TopbarTitle>Чаты</TopbarTitle>
                <Write/>
            </Topbar>
            <SearchField placeholder="Поиск"/>
            <SidebarChats/>
            <Navbar/>
        </ImSidebar>
    )
}

export default Sidebar