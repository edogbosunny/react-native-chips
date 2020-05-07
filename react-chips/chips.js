/**
 * @author Ramprasath R <ramprasath25@gmail.com>
 */
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Chips = (props) => {
    const { value, onPress, chipStyle } = props;
    return (
        <TouchableOpacity style={[styles.chip, chipStyle]} onPress={onPress}>
            <View style={{ flexDirection: 'row' }}>
                <Text style={[{ paddingHorizontal: 5 }]}>{value}</Text>
                <View style={styles.chipCloseBtn}><Text style={styles.chipCloseBtnTxt}>x</Text></View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    chip: {
        backgroundColor: '#EFEFF4',
        // borderColor: '#848787',
        // borderWidth: 1,
        margin: 4,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    chipCloseBtn: {
        borderRadius: 20/2,
        width: 20,
        height: 20,
        backgroundColor: '#979797',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 'auto',
        paddingTop: 'auto'
    },
    chipCloseBtnTxt: {
        color: '#EFEFF4',
        marginBottom: 2,
    }
})

export default Chips;
