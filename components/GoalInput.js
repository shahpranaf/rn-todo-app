import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = (props) => {
	const [enteredGoal, setEnteredGoal] = useState("");
	const { onAddGoal, visible, onCancelGoal } = props;

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	return (
		<Modal style={styles.modalContainer} visible={visible} animationType="slide">
			<View style={styles.inputContainer}>
				<TextInput
					placeholder="Course Goal"
					style={styles.input}
					value={enteredGoal}
					onChangeText={goalInputHandler}
				/>
                <View style={styles.btnConatienr}>
                    <View style={styles.btn}>
                        <Button title="ADD"onPress={() => onAddGoal(enteredGoal)} />
                    </View>
                    <View style={styles.btn}>
                        <Button title="CANCEL" color="red" onPress={() => onCancelGoal()} />
                    </View>
                </View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
   
	inputContainer: {
        flex:1, 
        justifyContent: "center",
        alignItems: "center"
	},
    input: {width:"80%", borderColor: "black", borderWidth: 1, padding: 10, marginBottom: 10 },
    btnConatienr: {
        flexDirection:"row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "60%",
    },
	btn: {
        width: "40%"
    },
});

export default GoalInput;
