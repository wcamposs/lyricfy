// libraries
import React, { ReactNode } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

// js
import colors from '../../global/Colors/colors';
import fonts from '../../global/Fonts/fonts';

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

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <BorderlessButton
                    onPress={handleGoBack}
                >
                    <Feather name="arrow-left" size={30} color={colors.tertiary} />
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
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: colors.primary,
    },
    topBar: {
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    logoText: {
        color: colors.tertiary,
        fontFamily: fonts.text,
        fontSize: 16,
        textAlign: 'center',
    },

    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    title: {
        color: colors.tertiary,
        fontSize: 24,
        fontFamily: fonts.title,
        lineHeight: 32,
        maxWidth: 160,
        marginRight: 36,
        marginVertical: 30,
    }
});

export default Header;
