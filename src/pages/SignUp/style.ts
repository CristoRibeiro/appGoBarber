import { getBottomSpace } from 'react-native-iphone-x-helper';
import styled from 'styled-components/native';
import { Form as FormMobile } from '@unform/mobile';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 5px 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: #f4ede8;
  font-family: 'RobotoSlab-Medium';
  margin: 64px 0 24px;
`;

export const ReturnToHome = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  background: #312e38;
  border-top-width: 1px;
  justify-content: center;
  align-items: center;

  border-color: #232129;
  padding: 16px 0 ${16 + getBottomSpace()}px;
  flex-direction: row;
`;

export const ReturnToHomeText = styled.Text`
  font-size: 14px;
  font-family: 'RobotoSlab-Regular';
  color: #f4ede8;
  margin-left: 16px;
`;

export const Form = styled(FormMobile)`
  width: 100%;
`;
