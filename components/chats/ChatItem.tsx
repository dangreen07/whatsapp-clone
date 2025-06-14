import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ChatItem({ name, message, time, isEndItem=false, onPress }: { name: string, message: string, time: string, isEndItem?: boolean, onPress?: () => void }) {
    const styles = StyleSheet.create({
        container: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
        },
        avatar: {
            width: 50,
            height: 50,
            borderRadius: 25,
        },
        infoContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'flex-start',
            gap: 5,
            paddingVertical: 10,
            borderTopWidth: 1,
            borderTopColor: 'lightgray',
            borderBottomWidth: isEndItem ? 1 : 0,
            borderBottomColor: 'lightgray',
        },
        name: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
        },
        message: {
            fontSize: 16,
            color: 'gray',
        },
        nameContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
        },
        time: {
            fontSize: 12,
            color: 'gray',
        }
    })
    
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('@/assets/images/default-avatar-icon.jpg')} style={styles.avatar} />
            <View style={styles.infoContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.time}>{time}</Text>
                </View>
                <Text style={styles.message}>{message}</Text>
            </View>
        </TouchableOpacity>
    )
}