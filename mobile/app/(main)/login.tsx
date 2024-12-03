import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { login } from '../../services/api';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async () => {
        try {
            const { data } = await login(username, password);
            Alert.alert('Success', `Token: ${data.token}`);
            router.push('/'); // Redirect to home
        } catch (error) {
            Alert.alert('Error', 'Invalid credentials');
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={() => router.push('/register')} />
        </View>
    );
};

export default Login;
