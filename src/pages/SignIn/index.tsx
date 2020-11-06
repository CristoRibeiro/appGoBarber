import React from 'react';
import { Image } from 'react-native';
import { Container, Title } from './style';
import Logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Image source={Logo} />
      <Title>Faça seu login!</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Input name="password" icon="lock" placeholder="Senha" />
      <Button onPress={() => console.log('deu')}>Entrar</Button>
    </Container>
  );
};

export default SignIn;
