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
        marginTop: 10,
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
    },
    clearButton: {
        marginBottom: 40,
    },
    fieldTitle: {
        color: colors.primary,
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    fieldInput: {
        marginBottom: 40,
        width: 280,
        height: 50,
        borderRadius: 18,
        marginHorizontal: 10,
        textAlign: 'center',
        backgroundColor: '#e6e6e6',
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
        width: 240,
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
