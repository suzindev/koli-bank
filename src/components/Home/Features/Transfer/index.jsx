import React from "react";
import { Button, ButtonText, Container, Field, Label, Title, Form, Input } from "./styled";

const Transfer = () => {
    return (
        <Container>
            <Title>Fazer Transferência</Title>

            <Form>
                <Field>
                    <Label>Nome da pessoa</Label>
                    <Input placeholder={"Nome"} />
                </Field>
                <Field>
                    <Label>CPF</Label>
                    <Input placeholder={"000.000.000-00"} keyboardType="number-pad" />
                </Field>
                <Field>
                    <Label>Banco</Label>
                    <Input placeholder={"Itaú, Banco do Brasil, NuBank, etc..."} />
                </Field>
                <Field>
                    <Label>Agência</Label>
                    <Input placeholder={"0000"} keyboardType="number-pad" />
                </Field>
                <Field>
                    <Label>Conta com dígito</Label>
                    <Input placeholder={"00000-0"} keyboardType="number-pad" />
                </Field>
                <Field>
                    <Label>Valor da transferência</Label>
                    <Input placeholder={"R$ 2500"} keyboardType="number-pad" />
                </Field>
            </Form>
            <Button>
                <ButtonText>Enviar transferência</ButtonText>
            </Button>
        </Container>
    );
};

export default Transfer;