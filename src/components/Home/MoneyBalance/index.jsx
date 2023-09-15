import { View } from "react-native";
import React, { useState } from "react";
import { Container, DefaultText, RowContainer } from "./styled";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const MoneyBalance = () => {
    const [seeMoney, setSeeMoney] = useState(false);

    const handleToggleSeeMoney = () => {
        setSeeMoney(!seeMoney);
    }

    return (
        <Container>
            <View>
                <DefaultText>Saldo Atual</DefaultText>
                {
                    !seeMoney ? (
                        <RowContainer>
                            <DefaultText>****</DefaultText>
                            <Ionicons
                                name="eye-off-outline"
                                size={24}
                                color="#e53d41"
                                style={{ marginLeft: 10 }}
                                onPress={handleToggleSeeMoney}
                            />
                        </RowContainer>
                    ) : (
                        <RowContainer>
                            <DefaultText>R$ 5000</DefaultText>
                            <Ionicons
                                name="eye-outline"
                                size={24}
                                color="#e53d41"
                                style={{ marginLeft: 10 }}
                                onPress={handleToggleSeeMoney}
                            />
                        </RowContainer>
                    )
                }
            </View>
            <RowContainer>
                <DefaultText>Ver Detalhes</DefaultText>
                <MaterialIcons
                    name="keyboard-arrow-right"
                    size={22}
                    color="#e53d41"
                    style={{ marginLeft: 5 }}
                    onPress={() => { }}
                />
            </RowContainer>
        </Container>
    );
};

export default MoneyBalance;