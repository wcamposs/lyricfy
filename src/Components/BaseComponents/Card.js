import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';

interface Props {
    children: any,
    heigth: Number,
    style?: any,
    styleTitle?: String,
    title?: String,
    width: Number,
}

function Card(props: Props) {
    const { children, style, styleTitle, title} = props;

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
                    <View style={styles.flex}>
                        <Text style={[styles.title, styleTitle]}>{title}</Text>
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
    flex: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 26,
        marginVertical: 18,
    },
});

export default Card;