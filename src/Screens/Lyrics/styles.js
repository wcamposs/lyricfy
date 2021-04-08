// libraries
import { StyleSheet } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// js
import colors from '../../Colors/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    cardContainer: {
        height: hp('87%'),
        width: wp('96%'),
        marginTop: 12,
    },
    childContainer: {
        marginTop: 60,
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
        marginBottom: 10,
    },
    lyricsSettings: {
        justifyContent: 'center',
        flexDirection: 'row',
    },
    sizeControllerButton: {
        marginHorizontal: 10,
    },
    lyricsContainer: {
        marginTop: 20,
        marginHorizontal: 10,
    },
    lyricsText: {
        marginTop: -70,
        color: colors.secondary,
        fontWeight: 'normal',
    },
});

export default styles;