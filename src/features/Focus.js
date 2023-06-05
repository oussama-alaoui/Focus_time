import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { colors } from "../utilis/colors";
import { Button, TextInput } from "react-native-paper";
import { fontSizes, spacing } from "../utilis/sizes";

export default function Focus({ setFocusSubject, focusSubject }) {
    const [tempItem, setTempItem] = useState(null);
    function addSubject() {
        setFocusSubject(tempItem);
    }
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput 
                    label="What you like to ficus on ..." 
                    value={focusSubject}
                    onChangeText={setTempItem}
                />
            </View>
                <Button
                    style={{width: 100, alignSelf: 'center' }}
                    icon="plus" 
                    mode="contained" 
                    onPress={() => addSubject()}
                >
                    Add
                </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.dark,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    text_style: {
        color: colors.light,
    },
    inputContainer: {
        flex: 0.5,
        padding: spacing.md,
        justifyContent: 'center',
    }
});