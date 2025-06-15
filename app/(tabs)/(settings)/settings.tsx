import SearchBar from "@/components/chats/SearchBar";
import { IconSymbol } from "@/components/ui/IconSymbol";
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
                <TouchableOpacity style={styles.settingsTabContainer} onPress={() => router.push("/account")}>
                    <View style={styles.settingsTabTextContainer}>
                        <IconSymbol name="key" size={20} color="black" />
                        <Text style={styles.settingsTabText}>Account</Text>
                    </View>
                    <IconSymbol name="chevron.right" size={20} color="gray" />
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
        marginHorizontal: 10,
        marginBottom: 10
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
    },
    settingsTabContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginHorizontal: 10,
        marginBottom: 10
    },
    settingsTabTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
    },
    settingsTabText: {
        fontSize: 20,
    }
})