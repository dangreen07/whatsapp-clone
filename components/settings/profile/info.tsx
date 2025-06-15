import { IconSymbol } from "@/components/ui/IconSymbol";
import { useState } from "react";
import { Modal, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function ProfileInfo({ title, value }: { title: string, value: string }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalValue, setModalValue] = useState(value);

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <TouchableOpacity style={styles.valueContainer} onPress={() => setIsModalVisible(true)}>
                    <Text style={styles.value}>{value}</Text>
                    <IconSymbol name="chevron.right" size={20} color="gray" />
                </TouchableOpacity>
            </View>
            <Modal visible={isModalVisible} animationType="slide" style={styles.modal}>
                <SafeAreaView style={styles.modalContainer}>
                    <View style={styles.modalHeader}>
                        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Cancel</Text>
                        </TouchableOpacity>
                        <Text style={styles.modalTitle}>{title}</Text>
                        <TouchableOpacity onPress={() => setIsModalVisible(false)}>
                            <Text style={styles.modalButtonText}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <TextInput value={modalValue} onChangeText={setModalValue} style={styles.modalInput} />
                </SafeAreaView>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 10,
        marginBottom: 20
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'gray',
        marginLeft: 20
    },
    value: {
        fontSize: 16,
        marginRight: 10
    },
    valueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    modalHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        paddingHorizontal: 15,
        paddingVertical: 12,
        borderRadius: 10,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalInput: {
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginHorizontal: 10,
        fontSize: 18
    },
    modalButtonText: {
        color: 'black',
        padding: 10,
        fontSize: 20
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        backgroundColor: 'rgb(242, 242, 242)',
    }
})