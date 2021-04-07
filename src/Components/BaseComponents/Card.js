import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface Props {
    children: any,
    heigth: Number,
    style?: any,
    styleTitle?: String,
    styleSubtitle?: String,
    title?: String,
    subtitle?: String,
    width: Number,
}

function Card(props: Props) {
    const { children, style, styleTitle, styleSubtitle, subtitle, title} = props;

    function renderChildren() {
        return(
            <View style={styles.containerChildren}>
                {children}
            </View>
        );
    }

    return (
        <View style={[styles.container, style]}>
            {title && (
                <>
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, styleTitle]}>{title}</Text>
                        <Text style={[styles.subtitle, styleSubtitle]}>{subtitle}</Text>
                    </View>
                </>
            )}
            {renderChildren()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        borderRadius: 20,
        marginHorizontal: 8,
        marginVertical: 4,
        padding: 10,

        ...Platform.select({
            ios: {
                shadowColor: '#c9c9c9',
                shadowOffset: { height: 1, width: 1 },
                shadowOpacity: 0.5,
                shadowRadius: 2,
            },
            android: {
                elevation: 10,
            },
        }),
    },
    containerChildren: {
        marginTop: 10,
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        marginTop: 10,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Card;