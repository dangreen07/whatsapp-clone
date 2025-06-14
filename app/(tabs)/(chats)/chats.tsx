import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import SearchBar from "@/components/chats/SearchBar";
import ChatItem from "@/components/chats/ChatItem";
import { router } from "expo-router";

export default function Chats() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>Chats</Text>
                <SearchBar placeholder="Ask Meta AI or Search" />
                <View style={styles.chatList}>
                    <ChatItem name="John Doe" message="Hello, how are you?" time="12:00 PM" onPress={() => router.push("/messager")} />
                    <ChatItem name="Jane Doe" message="Hello, how are you?" time="12:00 PM" onPress={() => router.push("/messager")} />
                    <ChatItem name="Jake Doe" message="Hello, how are you?" time="12:00 PM" isEndItem={true} onPress={() => router.push("/messager")} />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'left',
        marginTop: 10,
    },
    scrollView: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    chatList: {
        flex: 1,
        backgroundColor: 'white',
    }
})