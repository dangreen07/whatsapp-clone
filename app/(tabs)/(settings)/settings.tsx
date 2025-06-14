import SearchBar from "@/components/chats/SearchBar";
import { router } from "expo-router";
import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function Settings() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Settings</Text>
                <SearchBar placeholder="Search" />
                <TouchableOpacity style={styles.profileContainer} onPress={() => router.push("/profile")}>
                    <Image source={require("@/assets/images/default-avatar-icon.jpg")} style={styles.profileImage} />
                    <View style={styles.profileInfo}>
                        <Text style={styles.profileName}>John Doe</Text>
                        <Text style={styles.profileStatus}>Available</Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        textAlign: 'left',
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 10
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    profileName: {
        fontSize: 22,
    },
    profileInfo: {
        flexDirection: 'column',
        gap: 5,
    },
    profileStatus: {
        fontSize: 14,
        color: 'green',
    }
})