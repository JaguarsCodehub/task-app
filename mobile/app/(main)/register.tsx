import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { register } from '../../services/api';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('User'); // Default role
    const router = useRouter();

    const handleRegister = async () => {
        try {
            const { data } = await register(username, password, role);
            Alert.alert('Success', 'User registered');
            router.push('/login'); // Redirect to login
        } catch (error) {
            Alert.alert('Error', 'Registration failed');
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" value={username} onChangeText={setUsername} />
            <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry />
            <Button title="Register" onPress={handleRegister} />
            <Button title="Go to Login" onPress={() => router.push('/login')} />
        </View>
    );
};

export default Register;
