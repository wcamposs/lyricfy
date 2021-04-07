import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    cardContainer: {
        height: 615,
        width: 370,
        marginTop: 10,
        marginLeft: 10,
    },
    cardTitle: {
        marginTop: 30,
        color: '#a102c9',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        lineHeight: 32,
        maxWidth: 300,
    },
    fieldsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 110,
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
    textMessage: {
        color: "#FFF",
        fontSize: 12,
        fontWeight: "bold",
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 40,
        marginTop: -70,
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
