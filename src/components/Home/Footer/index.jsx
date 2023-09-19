import React from "react";
import { Button, ButtonContainer, ButtonText, Container } from "./styled";
import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const Footer = () => {
    return (
        <Container>
            <ButtonContainer>
                <Button>
                    <AntDesign name="barcode" size={30} color={"#FFFFFF"} />
                    <ButtonText>Pagamento</ButtonText>
                </Button>
                <Button>
                    <MaterialIcons name="attach-money" size={36} color={"#E53D41"} />
                    <ButtonText>Extrato</ButtonText>
                </Button>
                <Button >
                    <FontAwesome name="bitcoin" size={30} color={"#FFFFFF"} />
                    <ButtonText>Investir</ButtonText>
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Footer;