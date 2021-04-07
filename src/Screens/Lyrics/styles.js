import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6e6e6',
    },
    cardContainer: {
        // flex: 1,
        height: 615,
        width: 370,
        marginTop: 10,
        marginLeft: 12,
    },
    childContainer: {
        marginTop: 60,
    },
    cardTitle: {
        color: '#a102c9',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 32,
        maxWidth: 300,
    },
    lyricsSettingsLine: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: -20,
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
        marginVertical: 10,
        marginHorizontal: 10,
    },
    lyricsText: {
        marginTop: -70,
        fontWeight: 'normal',
    },
});

export default styles;