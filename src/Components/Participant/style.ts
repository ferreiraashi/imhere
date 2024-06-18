import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12,
        marginBottom: 10,
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 16,
        marginLeft: 16
    },
    buttonText: {
        fontSize: 24,
        color: '#FFF'
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        backgroundColor: '#E23C44',
        alignItems: 'center',
        justifyContent: 'center',
    }
})