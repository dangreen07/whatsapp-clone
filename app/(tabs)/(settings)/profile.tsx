import ProfileInfo from "@/components/settings/profile/info";
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.profileImageContainer}>
                    <Image source={require('@/assets/images/default-avatar-icon.jpg')} style={styles.profileImage} />
                    <Text style={styles.editPhotoText}>Edit Photo</Text>
                </View>
                <ProfileInfo title="Name" value="John Doe" />
                <ProfileInfo title="About" value="Available" />
                <ProfileInfo title="Phone" value="+1234567890" />
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
    },
    profileImageContainer: {
        alignItems: 'center',
        marginTop: 20,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editPhotoText: {
        fontSize: 16,
        color: '#067D2B',
        fontWeight: 'bold',
        marginTop: 10,
    }
})