import { StyleSheet } from 'react-native';
import colors from '../../Colors/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    cardContainer: {
        height: 615,
        width: 370,
        marginTop: 20,
        marginLeft: 10,
    },
    cardTitle: {
        marginTop: 30,
        color: colors.primary,
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
    inputLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 50,
        borderRadius: 18,
        backgroundColor: colors.background,
        marginBottom: 40,
    },
    clearButton: {
        marginRight: 20,
    },
    fieldTitle: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fieldInput: {
        width: 280,
        height: 50,
        borderRadius: 18,
        marginHorizontal: 10,
        textAlign: 'center',
        backgroundColor: colors.background,
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    textMessage: {
        color: colors.tertiary,
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
        width: 320,
        backgroundColor: colors.primary,
        borderRadius: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: colors.tertiary,
        fontSize: 20,
        fontWeight: "bold",
    },
});

export default styles;
