import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../utilis/colors";

export default function Focus() {
    return (
        <View style={styles.container}>
            <Text style={styles.text_style}>This is the Focus screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text_style: {
        color: colors.light,
    },
});