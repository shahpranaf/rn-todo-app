import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


const GoalItem = props => {
    console.log(props)
    const {id, value} = props.itemData;
    
    return (
        <TouchableOpacity onPress={() =>  props.onDeleteItem(id)}>
            <View style={styles.listItem}><Text>{value}</Text></View>
        </TouchableOpacity>
    )
};


const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;