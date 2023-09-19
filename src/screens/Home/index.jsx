import React, { useState } from "react";
import { Container, MainInfoContainer } from "./styled";
import Header from "../../components/Home/Header";
import MoneyBalance from "../../components/Home/MoneyBalance";
import SelectFeatures from "../../components/Home/SelectFeatures";
import CardsList from "../../components/Home/Features/Card";
import Pix from "../../components/Home/Features/Pix";
import Transfer from "../../components/Home/Features/Transfer";
import Footer from "../../components/Home/Footer";

const Home = () => {
    const [currentFeature, setCurrentFeature] = useState("Cards");

    return (
        <Container>
            <MainInfoContainer>
                <Header />

                <MoneyBalance />

                <SelectFeatures setFeature={setCurrentFeature} />
            </MainInfoContainer>
            {
                currentFeature === "Cards" ? (
                    <CardsList />
                ) : currentFeature === "Transfer" ? (
                    <Transfer />
                ) : (
                    <Pix />
                )
            }
            <Footer />
        </Container>
    );
};

export default Home;