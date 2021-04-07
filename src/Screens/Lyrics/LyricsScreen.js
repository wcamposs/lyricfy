import React, { useEffect, useState } from 'react';
import { Dimensions, ScrollView, SafeAreaView, Text, View } from 'react-native';

import styles from './styles';

import Card from '../../Components/BaseComponents/Card';
import Header from '../../Components/BaseComponents/Header';

function LyricsScreen({ route }) {
    const artist = route.params.artist;
    const lyrics = route.params.lyrics;
    const song = route.params.song;

    const { height } = Dimensions.get('window');
    // const [screenHeigth, setScreenHeigth] = useState(0);

    // const onContentSizeChange = (contentHeigth) => {
    //     setScreenHeigth({ screenHeigth: contentHeigth });
    // }

    useEffect(() => {

    }, []);

    function cardChildren() {
        // const scrollEnabled = screenHeigth > height;
        return(
            <View style={styles.lyricsContainer}>
                <ScrollView
                scrollEnabled={true}
                // onContentSizeChange={onContentSizeChange}
                >
                    <View style={styles.childContainer}>
                        <View style={styles.lyricsContainer}>
                            <Text style={styles.lyricsText}>{`${lyrics}`}</Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }

    return(
        <SafeAreaView style={styles.container}>
            <Header
                title='Lyrics screen'
            />
            <Card
                style={styles.cardContainer}
                styleTitle={styles.cardTitle}
                title={song}
                subtitle={artist}
                children={cardChildren()}
            />
        </SafeAreaView>
    );
}

export default LyricsScreen;