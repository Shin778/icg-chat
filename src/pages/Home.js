import React from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import Chat from "../components/Chat/Chat"
import styled from "styled-components"

const AppWrapper = styled.div`
display: flex;
font-family: Arial, Helvetica, sans-serif;
`;

const Container = styled.div`
display: flex;
`;

const Home = () => {
    return (
        <AppWrapper>
            <Container>
                <Sidebar/>
                <Chat/>
            </Container>
        </AppWrapper>
    )
}

export default Home