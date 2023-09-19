import styled from "styled-components/native";

export const Container = styled.ImageBackground.attrs({
    resizeMode: "cover",
})`
  width: 100%;
  min-height: 300px;
  align-items: center;
  justify-content: flex-end;
  margin-top: -60px;
  z-index: -1;
`;

export const ButtonContainer = styled.View`
  flex-direction: row;
  margin-bottom: 25px;
`;

export const Button = styled.TouchableOpacity`
  width: 90px;
  height: 90px;
  border-radius: 45px;
  padding: 10px;
  background-color: #161317;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

export const ButtonText = styled.Text`
  font-size: 12px;
  color: white;
  font-weight: bold;
`;