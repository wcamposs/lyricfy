import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40,
        backgroundColor: '#e6e6e6',
    },
    title: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 160,
        color: "#a102c9",
        fontSize: 60,
        fontWeight: "bold",
    },
    subtitle: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 16,
        color: "#000",
        fontSize: 24,
    },
    description: {
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        color: "#000",
        fontSize: 16,
        lineHeight: 30,
        marginTop: 90,
        margin: 40,
        // fontFamily: "Archivo_400Regular",
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "center",
    },
    button: {
        height: 70,
        width: 350,
        backgroundColor: "#a102c9",
        borderRadius: 32,
        marginLeft: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        // fontFamily: "Archivo_700Bold",
        color: "#FFF",
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
