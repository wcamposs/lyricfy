// libraries
import React, { useEffect, useState } from 'react';
import { KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

// js
import styles from './styles';
import api from '../../Services/api';

// components
import Card from '../../Components/BaseComponents/Card';
import Header from '../../Components/BaseComponents/Header';
import { Keyboard } from 'react-native';


function SearchScreen({ navigation }) {
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [song, setSong] = useState('');

    useEffect(() => {
        if (lyrics !== '') {
            handleNavigateToLyricsPage(artist, song, lyrics);
        }
    }, [lyrics]);

    async function getLyrics(artist, song) {
        try {
            const response = await api.get(`/${artist}/${song}`);
            const results = response.data.lyrics;
            return results;
        }
        catch (error) {
            console.log(error);
            return '';
        }
    }

    function handleSetArtist(artist) {
        setArtist(artist);
    }

    function handleSetSong(song) {
        setSong(song);
    }

    async function searchLyrics() {
        if (artist !== '' && song !== '') {
            const responseLyrics = await getLyrics(artist, song);
            setLyrics(responseLyrics);
        } else {
            console.log('Preencha os 2 campos');
        }
    }

    function handleNavigateToLyricsPage() {
        navigation.navigate('LyricsPage', { artist: artist, song: song, lyrics: lyrics });
    }

    function getLyricsAndNavigate() {
        if (artist !== '' && song !== '') {
            searchLyrics();
            if (lyrics !== '') {
                handleNavigateToLyricsPage(artist, song, lyrics);
            }
        } else {
            console.log('existem campos não preenchidos');
        }
    }

    function renderSearch() {
        return(
            <View>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.fieldTitle}>Artist</Text>
                    <TextInput
                        style={styles.fieldInput}
                        multiline={false}
                        autoCapitalize='none'
                        autoCompleteType='off'
                        onChangeText={handleSetArtist}
                        value={artist}
                    />
                    <Text style={styles.fieldTitle}>Song</Text>
                    <TextInput
                        style={styles.fieldInput}
                        multiline={false}
                        autoCapitalize='none'
                        autoCompleteType='off'
                        onChangeText={handleSetSong}
                        value={song}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={getLyricsAndNavigate}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return(
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <Header
                title="Search screen"
            />
            <Card
                style={styles.cardContainer}
                styleTitle={styles.cardTitle}
                title="Search for an artist and song"
                children={renderSearch()}
            />
        </KeyboardAvoidingView>
    );
}

export default SearchScreen;
