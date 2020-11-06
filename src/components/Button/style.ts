import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  margin-top: 8px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;
`;

// export const Icon = styled(Icon)``;
export const ButtonText = styled.Text`
  font-size: 16px;
  color: #312e38;
  font-family: 'RobotoSlab-Medium';
`;
