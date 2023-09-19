import React from "react";
import { Button, ButtonText, Container, InfoContainer, InfoContent, InfoTitle } from "./styled";

const CardsInfo = () => {
    return (
        <>
            <Container>
                <Button background={"#D8D8D8"}>
                    <ButtonText color={"#000000"}>ANTECIPAR</ButtonText>
                </Button>
                <InfoContainer>
                    <InfoTitle>PRÓXIMAS FATURAS</InfoTitle>
                    <InfoContent color={"#000000"}>R$ 640,53</InfoContent>
                </InfoContainer>
            </Container>
            <Container>
                <Button background={"#F5C6C7"}>
                    <ButtonText color={"#E53D41"}>VER FATURA</ButtonText>
                </Button>
                <InfoContainer>
                    <InfoTitle>LIMITE DISPONÍVEL</InfoTitle>
                    <InfoContent color={"#E53D41"}>R$ 2640,53</InfoContent>
                </InfoContainer>
            </Container>
            <Container>
                <Button background={"#98E9D4"}>
                    <ButtonText color={"#00BA80"}>VER FATURA</ButtonText>
                </Button>
                <InfoContainer>
                    <InfoTitle>LIMITE ATUAL</InfoTitle>
                    <InfoContent color={"#00BA80"}>R$ 5000,53</InfoContent>
                </InfoContainer>
            </Container>
        </>
    );
};

export default CardsInfo;