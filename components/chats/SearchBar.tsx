import { StyleSheet, TextInput, View } from "react-native";
import { IconSymbol } from "../ui/IconSymbol";

export default function SearchBar({ placeholder }: { placeholder: string }) {
    return (
        <View style={styles.container}>
            <IconSymbol size={20} name="magnifyingglass" color="dimgray" />
            <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="dimgray"  />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E5E5E5',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },
    input: {
        flex: 1,
        fontSize: 18,
        color: 'black'
    }
})