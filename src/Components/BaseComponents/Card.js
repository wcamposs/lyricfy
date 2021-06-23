// libraries
import React from 'react';
import { Image, Platform, StyleSheet, Text, View } from 'react-native';

// js
import colors from '../../Colors/colors';

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
    const { children, style, styleTitle, styleSubtitle, subtitle, title, albumArt } = props;

    function renderChildren() {
        return (
            <View style={styles.containerChildren}>
                {children}
            </View>
        );
    }

    return (
        <View style={[styles.container, style]}>
            {title && (
                <View style={styles.headerRowContainer}>
                    {!albumArt ? null : (
                        <Image source={{ uri: albumArt }} style={styles.image} />
                    )}
                    <View style={styles.titleContainer}>
                        <Text style={[styles.title, styleTitle]}>{title}</Text>
                        <Text style={[styles.subtitle, styleSubtitle]}>{subtitle}</Text>
                    </View>
                </View>
            )}
            {renderChildren()}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.tertiary,
        borderRadius: 8,
        marginHorizontal: 8,
        marginVertical: 4,
        padding: 10,

        ...Platform.select({
            ios: {
                shadowColor: colors.shadow,
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
        flex: 1,
        marginTop: 60,
    },
    headerRowContainer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    titleContainer: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        marginTop: 5,
        marginRight: 70,
    },
    image: {
        width: 64,
        height: 64,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
    },
    subtitle: {
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default Card;