import { View, Text } from "react-native";
import React from "react";
import { Container, MainInfoContainer } from "./styled";
import Header from "../../components/Home/Header";

const Home = () => {
    return (
        <Container>
            <MainInfoContainer>
                <Header />
                <Text>Home</Text>
            </MainInfoContainer>
        </Container>
    );
};

export default Home;