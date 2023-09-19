import React from "react";
import { Button, ButtonText, Container, Field, Input, Label, Title } from "./styled";

const Pix = () => {
    return (
        <Container>
            <Title>Transferência via Pix</Title>
            <Field>
                <Label>Qual o valor a ser enviado?</Label>
                < Input placeholder={"R$ 2500"} keyboardType="number-pad" />
            </Field>
            <Field>
                <Label>Qual a chave pix?</Label>
                < Input placeholder={"CPF,CNPJ,EMAIL, etc..."} />
            </Field>
            <Button>
                <ButtonText>Enviar transferência</ButtonText>
            </Button>
        </Container>
    );
};

export default Pix;