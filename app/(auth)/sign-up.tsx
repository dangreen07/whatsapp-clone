import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { router } from "expo-router";
import { useState } from "react";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

export default function SignUp() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    const handleSignUp = async () => {
        try {
            const url = `${process.env.EXPO_PUBLIC_BACKEND_URL}/sign-up`;
            const response = await axios.post(url, JSON.stringify({
                first_name: firstName,
                last_name: lastName,
                phone_number: phoneNumber,
                password: password
            }), {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            const data = response.data as { access_token: string, refresh_token: string };

            await SecureStore.setItemAsync("access_token", data.access_token);
            await SecureStore.setItemAsync("refresh_token", data.refresh_token);

            router.replace("/(tabs)/(chats)");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior="padding">
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your first name</Text>
                <TextInput style={styles.firstNameInput} placeholder="First Name" value={firstName} onChangeText={setFirstName} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your last name</Text>
                <TextInput style={styles.lastNameInput} placeholder="Last Name" value={lastName} onChangeText={setLastName} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your phone number to sign up</Text>
                <TextInput style={styles.phoneNumberInput} keyboardType="phone-pad" maxLength={14} value={phoneNumber} onChangeText={setPhoneNumber} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your password to sign up</Text>
                <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSignUp}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text>Already have an Account?</Text>
                <TouchableOpacity onPress={() => router.replace("/sign-in")}>
                    <Text style={styles.signUpText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 10,
        width: '80%'
    },
    inputContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '80%'
    },
    firstNameInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    lastNameInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    phoneNumberInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    passwordInput: {
        width: '100%',
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    button: {
        backgroundColor: '#007AFF',
        padding: 10,
        borderRadius: 5,
        width: '40%'
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    signUpContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        marginTop: 10
    },
    signUpText: {
        color: '#007AFF',
        fontSize: 16,
        fontWeight: 'bold'
    }
});