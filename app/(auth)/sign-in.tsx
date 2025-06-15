import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function SignIn() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign In</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your phone number to sign in</Text>
                <TextInput style={styles.phoneNumberInput} keyboardType="phone-pad" maxLength={14} value={phoneNumber} onChangeText={setPhoneNumber} />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.subtitle}>Enter your password to sign in</Text>
                <TextInput style={styles.passwordInput} placeholder="Password" secureTextEntry={true} value={password} onChangeText={setPassword} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {}}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signUpContainer}>
                <Text>Don&apos;t have an Account?</Text>
                <TouchableOpacity onPress={() => router.replace("/sign-up")}>
                    <Text style={styles.signUpText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
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
})