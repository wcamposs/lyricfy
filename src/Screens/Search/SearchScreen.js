import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

import Card from '../../Components/BaseComponents/Card';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

function SearchScreen() {

    function renderSearch() {
        return(
            <View>
                <View style={styles.fieldsContainer}>
                    <Text style={styles.fieldTitle}>Artist</Text>
                    <TextInput 
                        style={styles.fieldInput}
                        autoCapitalize='none'
                        autoCompleteType='off'
                        onChangeText={undefined}
                        value={undefined}
                    />
                    <Text style={styles.fieldTitle}>Song</Text>
                    <TextInput 
                        style={styles.fieldInput}
                        autoCapitalize='none'
                        autoCompleteType='off'
                        onChangeText={undefined}
                        value={undefined}
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <TouchableOpacity 
                        onPress={undefined}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    return(
        <View style={styles.container}>
            <Card 
                style={styles.cardContainer}
                styleTitle={styles.cardTitle}
                title="Search for an artist and song"
                children={renderSearch()}
            />
        </View>
    );
}

export default SearchScreen;
