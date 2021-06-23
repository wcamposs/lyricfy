// libraries
import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, SafeAreaView, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

// js
import colors from '../../Colors/colors';
import styles from './styles';

// components
import Card from '../../Components/BaseComponents/Card';
import Header from '../../Components/BaseComponents/Header';
import { TouchableOpacity } from 'react-native-gesture-handler';


function LyricsScreen({ route }) {
    const artist = route.params.artist;
    const lyrics = route.params.lyrics;
    const song = route.params.song;

    const minFontSize = 10;
    const maxFontSize = 30;

    const { height } = Dimensions.get('window');
    const [lyricsSettings, setLyricsSettings] = useState(false);
    const [fontSize, setfontSize] = useState(16);
    // const [screenHeigth, setScreenHeigth] = useState(0);

    // const onContentSizeChange = (contentHeigth) => {
    //     setScreenHeigth({ screenHeigth: contentHeigth });
    // }

    useEffect(() => {
        // console.log(lyrics);
    }, []);

    function increaseFontSize() {
        const newFontSize = fontSize + 1;
        if (newFontSize < maxFontSize) {
            setfontSize(newFontSize);
        }
    }

    function decreaseFontSize() {
        const newFontSize = fontSize - 1;

        if (newFontSize > minFontSize) {
            setfontSize(newFontSize);
        }
    }

    function resetFontSize() {
        setfontSize(16);
    }

    function enableLyricsSettings() {
        setLyricsSettings(!lyricsSettings);
    }

    function cardChildren() {
        // const scrollEnabled = screenHeigth > height;
        return (
            <View style={styles.lyricsContainer}>
                <View style={styles.lyricsSettingsLine}>
                    <View style={styles.lyricsSettings}>
                        {!lyricsSettings ? null : (
                            <>
                                <TouchableOpacity
                                    style={styles.sizeControllerButton}
                                    onPress={decreaseFontSize}
                                >
                                    <Feather name="minus-circle" size={24} color={colors.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.sizeControllerButton}
                                    onPress={increaseFontSize}
                                >
                                    <Feather name="plus-circle" size={24} color={colors.primary} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.sizeControllerButton}
                                    onPress={resetFontSize}
                                >
                                    <Feather name="refresh-ccw" size={22} color={colors.primary} />
                                </TouchableOpacity>
                            </>
                        )}
                        <TouchableOpacity
                            style={styles.sizeControllerButton}
                            onPress={enableLyricsSettings}
                        >
                            <Feather name="settings" size={24} color={colors.primary} />
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView
                    scrollEnabled={true}
                // onContentSizeChange={onContentSizeChange}
                >
                    <View style={styles.childContainer}>
                        <View style={styles.lyricsContainer}>
                            <Text style={[styles.lyricsText, { fontSize: fontSize }]}>{`${lyrics.lyrics}`}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title='Lyrics'
            />
            <Card
                style={styles.cardContainer}
                styleTitle={styles.cardTitle}
                title={song}
                subtitle={artist}
                albumArt={lyrics.albumArt}
                children={cardChildren()}
            />
        </SafeAreaView>
    );
}

export default LyricsScreen;