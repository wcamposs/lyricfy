import { StyleSheet } from 'react-native';
import colors from '../../Colors/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40,
        backgroundColor: colors.background,
    },
    title: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 160,
        color: colors.primary,
        fontSize: 60,
        fontWeight: "bold",
    },
    subtitle: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 16,
        color: colors.secondary,
        fontSize: 24,
    },
    description: {
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        color: colors.secondary,
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
        backgroundColor: colors.primary,
        borderRadius: 32,
        marginLeft: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        // fontFamily: "Archivo_700Bold",
        color: colors.tertiary,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
