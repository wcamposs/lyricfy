// libraries
import { StyleSheet } from 'react-native';

// js
import colors from '../../global/Colors/colors';
import fonts from '../../global/Fonts/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 40,
        backgroundColor: colors.primary,
    },
    title: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 160,
        color: colors.tertiary,
        fontSize: 80,
        fontFamily: fonts.title,
    },
    subtitle: {
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginTop: 16,
        color: colors.tertiary,
        fontSize: 28,
        fontFamily: fonts.text,
    },
    description: {
        alignItems: "center",
        alignContent: "center",
        textAlign: "center",
        color: colors.tertiary,
        fontSize: 20,
        lineHeight: 30,
        marginTop: 90,
        margin: 40,
        fontFamily: fonts.text,
    },
    buttonContainer: {
        flexDirection: "row",
        marginTop: 40,
        justifyContent: "center",
    },
    button: {
        height: 70,
        width: 350,
        backgroundColor: colors.tertiary,
        borderRadius: 12,
        marginLeft: 28,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        // fontFamily: "Archivo_700Bold",
        color: colors.primary,
        fontSize: 20,
        fontWeight: "bold",
        fontFamily: fonts.text,
    },
});

export default styles;
