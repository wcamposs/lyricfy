// libraries
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// js
import colors from '../../global/Colors/colors';
import fonts from '../../global/Fonts/fonts';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary,
    },
    cardContainer: {
        height: hp('83%'),
        width: wp('96%'),
        marginTop: 8,
    },
    cardTitle: {
        paddingLeft: 50,
        width: '100%',
        color: colors.primary,
        fontSize: 28,
        textAlign: 'center',
        // fontWeight: 'bold',
        fontFamily: fonts.title,
        lineHeight: 32,
        maxWidth: 300,
        marginTop: 20,
    },
    fieldsContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 110,
    },
    inputLine: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 320,
        height: 50,
        borderRadius: 12,
        backgroundColor: colors.background,
        marginBottom: 40,
    },
    clearButton: {
        marginRight: 20,
    },
    fieldTitle: {
        color: colors.primary,
        fontSize: 24,
        fontFamily: fonts.title,
        marginBottom: 10,
    },
    fieldArtistInput: {
        width: 280,
        height: 50,
        borderRadius: 12,
        marginHorizontal: 10,
        textAlign: 'center',
        backgroundColor: colors.background,
        color: colors.secondary,
        fontFamily: fonts.text,
        fontSize: 18,
    },
    fieldSongInput: {
        width: 280,
        height: 50,
        borderRadius: 12,
        marginHorizontal: 10,
        textAlign: 'center',
        backgroundColor: colors.background,
        color: colors.secondary,
        fontFamily: fonts.text,
        fontSize: 18,
    },
    textMessage: {
        color: colors.tertiary,
        fontSize: 12,
        fontFamily: fonts.title,
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
        borderRadius: 16,
        marginTop: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: colors.tertiary,
        fontSize: 20,
        fontFamily: fonts.title,
    },
});

export default styles;
