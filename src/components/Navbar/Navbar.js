import React from "react";
import {
    MainNavbar,
    ButtonTitle,
    Contacts,
    UserChats,
    Settings,
  } from "./Navbar.styled";
;


function Navbar() {
    return (
        <MainNavbar>
            <Contacts>
                <ButtonTitle>Контакты</ButtonTitle>
            </Contacts>
            <UserChats>
                <ButtonTitle>Чаты</ButtonTitle>
            </UserChats>
            <Settings>
                <ButtonTitle>Настройки</ButtonTitle>
            </Settings>
        </MainNavbar>
    )
}

export default Navbar