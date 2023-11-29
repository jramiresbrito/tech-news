import { useState } from 'react';
import { Alert } from 'react-native';

import { login } from '@lib/sessionService';

import { Highlight } from '@components/Highlight';
import { Container, Content, Icon } from './styles';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { useUser } from '@contexts/userContext';

export function Login() {
  const [email, setEmail] = useState('joao@exemplo.com');
  const [password, setPassword] = useState('123456');
  const { setSigned, setUserId, userId, signed } = useUser();

  async function handleLogIn() {
    try {

      const { data } = await login(email, password);

      setSigned?.(true);
      setUserId?.(data.user.id);

    } catch (_error) {
      Alert.alert('Erro ⚠', 'Usuário ou senha inválidos.');
    }
  }

  function handleSignUp() {
    // todo
    return
  }

  return (
    <Container>
      <Content>
        <Icon size={128} />

        <Highlight title="Tech News" subtitle="Faça login ou cadastre-se" />

        <Input placeholder="Email" value={email} onChangeText={setEmail} />

        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <Button
          title="Login"
          style={{ marginTop: 12 }}
          onPress={handleLogIn}
          disabled={!email || !password}
        />

        <Button
          title="Cadastrar"
          style={{ marginTop: 12 }}
          type="SECONDARY"
          onPress={handleSignUp}
        />
      </Content>
    </Container>
  );
}
