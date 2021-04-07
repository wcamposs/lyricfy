// libraries
import React, { ReactNode, Children } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

interface PageHeaderProps {
    title: String,
    headerRight?: ReactNode,
}

const Header: React.FunctionComponent<PageHeaderProps> = ({
    title,
    headerRight,
    children,
}) => {
    const { goBack } = useNavigation();

    function handleGoBack() {
        goBack();
    }

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton
                    onPress={handleGoBack}
                >
                    <Feather name="arrow-left" size={30} color="#FFF"/>
                </BorderlessButton>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.logoText}></Text>
            </View>

            <View style={styles.header}>
                {headerRight}
            </View>

            {children}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: "#a102c9",
    },
    topBar: {
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logoText: {
    color: "#FFF",
    fontSize: 16,
    textAlign: 'center',
    },

    header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    },

    title: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: 'bold',
    lineHeight: 32,
    maxWidth: 160,
    marginVertical: 40,
    }
});

export default Header;
