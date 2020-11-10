import React, { useCallback, useRef } from 'react';
import { Alert, Image, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import Logo from '../../assets/logo.png';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';
import api from '../../services/api';
import {
  Container,
  Title,
  ReturnToHome,
  ReturnToHomeText,
  Form,
} from './style';

interface FormDataSingUp {
  name: string;
  email: string;
  password: string;
}
const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const inputEmailRef = useRef<TextInput>(null);
  const inputPasswordRef = useRef<TextInput>(null);
  const handleSingOut = useCallback(
    async (data: FormDataSingUp) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Usuário obrigatório!'),
          email: Yup.string()
            .required('E-mail obrigatório!')
            .email('Informe um email válido!'),
          password: Yup.string().min(6, 'Mínimo de 6 dígitos!'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);

        Alert.alert('Usuário cadastrado com sucesso', 'Realize o logon!');
        navigation.goBack();
      } catch (error) {
        if (error instanceof Yup.ValidationError) {
          const erros = getValidationErrors(error);
          formRef.current?.setErrors(erros);
        } else {
          Alert.alert(
            'Erro ao realizar o cadastro',
            'Verifique as informações inseridas!',
          );
        }
      }
    },
    [navigation],
  );

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <Container>
        <Image source={Logo} />
        <Title>Crie sua conta</Title>
        <Form ref={formRef} onSubmit={handleSingOut}>
          <Input
            autoCapitalize="words"
            autoCorrect={false}
            name="name"
            icon="user"
            placeholder="Nome"
            returnKeyType="next"
            onSubmitEditing={() => inputEmailRef.current?.focus()}
          />
          <Input
            ref={inputEmailRef}
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            name="email"
            icon="mail"
            placeholder="Email"
            returnKeyType="next"
            onSubmitEditing={() => inputPasswordRef.current?.focus()}
          />
          <Input
            ref={inputPasswordRef}
            secureTextEntry
            textContentType="newPassword"
            name="password"
            icon="lock"
            placeholder="Senha"
            returnKeyType="send"
            onSubmitEditing={() => formRef.current?.submitForm()}
          />
          <Button onPress={() => formRef.current?.submitForm()}>
            Cadastrar
          </Button>
        </Form>
      </Container>

      <ReturnToHome onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={20} color="#F4EDE8" />
        <ReturnToHomeText>Voltar para login</ReturnToHomeText>
      </ReturnToHome>
    </ScrollView>
  );
};

export default SignUp;
