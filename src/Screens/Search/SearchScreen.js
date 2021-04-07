// libraries
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Text, View } from 'react-native';
import { TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { useToast } from 'react-native-styled-toast';
import { Feather } from '@expo/vector-icons';

// js
import styles from './styles';
import api from '../../Services/api';

// components
import Card from '../../Components/BaseComponents/Card';
import Header from '../../Components/BaseComponents/Header';
import { Keyboard } from 'react-native';
import { background } from 'styled-system';


function SearchScreen({ navigation }) {
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState('');
    const [song, setSong] = useState('');
    const [loading, setLoading] = useState(false);
    const [disabled, setDisabled] = useState(false);

    const { toast } = useToast();

    useEffect(() => {}, [loading, disabled]);

    useEffect(() => {
        if (lyrics !== '' && lyrics !== undefined) {
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
            return toast({ message: 'Lyrics not found', messageProps: { fontSize: 18 }, toastStyles: { borderRadius: 16, bg: 'red' }, color: '#fff', iconName: 'frown', iconSize: 26, iconColor: '#fff', closeButtonStyles: { bg: 'red'}, closeIconColor: '#fff', hideAccent: true});
        }
    }

    function handleSetArtist(artist) {
        setArtist(artist);
    }

    function handleSetSong(song) {
        setSong(song);
    }

    async function searchLyrics() {
        setLoading(true);
        if (artist !== '' && song !== '') {
            const responseLyrics = await getLyrics(artist, song);
            setLyrics(responseLyrics);
        } else {
            return ''
        }
        setLoading(false);
        setDisabled(false);
    }

    function handleNavigateToLyricsPage() {
        navigation.navigate('LyricsPage', { artist: artist, song: song, lyrics: lyrics });
    }

    function getLyricsAndNavigate() {
        if (artist !== '' && song !== '') {
            setDisabled(true)
            searchLyrics();
            if (lyrics !== '' && lyrics !== undefined) {
                handleNavigateToLyricsPage(artist, song, lyrics);
            }
        } else {
            return toast({ message: 'You must fill all fields!', messageProps: { fontSize: 18 }, toastStyles: { borderRadius: 16, bg: 'red' }, color: '#fff', iconName: 'alert-triangle', iconSize: 26, iconColor: '#fff', closeButtonStyles: { bg: 'red'}, closeIconColor: '#fff', hideAccent: true});
        }
    }

    function cleanArtistField() {
        setArtist('')
    }

    function cleanSongField() {
        setSong('')
    }

    function renderSearch() {
        return(
            <View>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.fieldTitle}>Artist</Text>
                    <View style={styles.inputLine}>
                        <TextInput
                            style={styles.fieldInput}
                            multiline={false}
                            autoCapitalize='none'
                            autoCompleteType='off'
                            onChangeText={handleSetArtist}
                            value={artist}
                        />
                        {!artist.length ? null : (
                            <TouchableOpacity
                                onPress={cleanArtistField}
                                style={styles.clearButton}
                            >
                                <Feather name="x" size={22} color="#000"/>
                            </TouchableOpacity>
                        )}
                    </View>

                    <Text style={styles.fieldTitle}>Song</Text>
                    <View style={styles.inputLine}>
                        <TextInput
                            style={styles.fieldInput}
                            multiline={false}
                            autoCapitalize='none'
                            autoCompleteType='off'
                            onChangeText={handleSetSong}
                            value={song}
                        />
                        {!song.length ? null : (
                            <TouchableOpacity
                                onPress={cleanSongField}
                                style={styles.clearButton}
                            >
                                <Feather name="x" size={22} color="#000"/>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        disabled={disabled}
                        onPress={getLyricsAndNavigate}
                        style={styles.button}
                    >
                        {!loading ? (
                            <Text style={styles.buttonText}>Search</Text>
                        ) : (
                            <ActivityIndicator size="large" color="#fff" />
                        )}
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
                title="Search"
            />
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <Card
                    style={styles.cardContainer}
                    styleTitle={styles.cardTitle}
                    title="Search for an artist and song"
                    children={renderSearch()}
                />
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}

export default SearchScreen;
