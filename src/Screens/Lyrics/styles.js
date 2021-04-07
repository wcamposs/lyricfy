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
        marginTop: 80,
    },
    cardTitle: {
        color: '#a102c9',
        fontSize: 26,
        fontWeight: 'bold',
        lineHeight: 32,
        maxWidth: 300,
    },
    lyricsContainer: {
        marginVertical: 10,
        marginHorizontal: 10,
    },
    lyricsText: {
        marginTop: -90,
        fontSize: 16,
        fontWeight: 'normal',
    },
});

export default styles;