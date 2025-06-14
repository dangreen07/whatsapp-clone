import { IconSymbol } from "@/components/ui/IconSymbol";
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

export default function Messager() {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        console.log(message);
        // Do the sending logic here
        setMessage("");
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <IconSymbol size={25} name="chevron.left" color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>John Doe</Text>
                <View style={styles.headerIcons}>
                    <IconSymbol size={30} name="video" color="black" />
                    <IconSymbol size={30} name="phone" color="black" />
                </View>
            </View>
            <ScrollView style={styles.messagesContainer}>
                <View style={styles.recipientMessage}>
                    <Text style={styles.messageText}>Hello, how are you?</Text>
                    <Text style={styles.messageTime}>12:00 PM</Text>
                </View>
                <View style={styles.senderMessage}>
                    <Text style={styles.messageText}>Hello, how are you?</Text>
                    <Text style={styles.messageTime}>12:00 PM</Text>
                </View>
            </ScrollView>
            <KeyboardAvoidingView behavior="padding">
                <View style={styles.inputContainer}>
                    <IconSymbol size={25} name="plus" color="black" />
                    <TextInput style={styles.input} placeholder="Type a message" onSubmitEditing={handleSendMessage} value={message} onChangeText={setMessage} />
                    <TouchableOpacity onPress={handleSendMessage}>
                        <IconSymbol size={25} name="paperplane" color="black" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 20,
        paddingRight: 20
    },
    messagesContainer: {
        flex: 1,
        backgroundColor: 'white',
    },
    recipientMessage: {
        alignSelf: 'flex-start',
        backgroundColor: '#DADADA',
        borderRadius: 10,
        width: 'auto',
        maxWidth: '50%',
        margin: 10,
        padding: 5
    },
    senderMessage: {
        alignSelf: 'flex-end',
        backgroundColor: '#94F6A3',
        borderRadius: 10,
        width: 'auto',
        maxWidth: '50%',
        margin: 10,
        padding: 5
    },
    messageText: {
        fontSize: 16,
        color: 'black',
    },
    messageTime: {
        fontSize: 12,
        color: 'dimgray',
        alignSelf: 'flex-end',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        padding: 10
    }
})