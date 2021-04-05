import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e6e6e6',
        marginTop: 90, // Remove it when add header
    },
    cardContainer: {
        height: 600,
        width: 370,
        marginTop: 25,
    },
    cardTitle: {
        marginTop: 80,
        color: '#a102c9',
    },
    fieldsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80,
    },
    fieldTitle: {
        color: '#a102c9',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fieldInput: {
        marginBottom: 40,
        width: 330,
        height: 50,
        borderRadius: 18,
        marginHorizontal: 10,
        textAlign: 'center',
        backgroundColor: '#e6e6e6',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 40,
        marginTop: -50,
    },
    button: {
        height: 60,
        width: 240,
        backgroundColor: "#a102c9",
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
