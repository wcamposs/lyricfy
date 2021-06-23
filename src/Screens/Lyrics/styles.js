// libraries
import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

// js
import colors from '../../Colors/colors';

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
    childContainer: {
        // maybe will be usefull later
    },
    cardTitle: {
        color: colors.primary,
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 32,
        maxWidth: wp('40%'),
    },
    lyricsSettingsLine: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: -60,
    },
    lyricsSettings: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sizeControllerButton: {
        marginHorizontal: 10,
        marginTop: 10,
        marginBottom: 15,
    },
    lyricsContainer: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    lyricsText: {
        color: colors.secondary,
        fontWeight: 'normal',
    },
});

export default styles;