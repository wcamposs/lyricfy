// libraries
import React from 'react';
import { Text, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native-gesture-handler';

// js
import styles from './styles';

function LandingScreen() {
    const { navigate } = useNavigation();

    function handleNavigateToSearchPage() {
        return navigate('SearchPage');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Lyricfy</Text>
            <Text style={styles.subtitle}>Lyrics for you!</Text>

            <Text style={styles.description}>Start searching the lyrics of your favorite songs.</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleNavigateToSearchPage}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Let's Search!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default LandingScreen;
