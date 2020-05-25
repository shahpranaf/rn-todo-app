import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ListView, ScrollView, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false)

  const addGoalHandler = (enteredGoal) => {
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal}]);
    setisAddMode(false);
  }

  const deleteHandler = (goalId) => {
    console.log(goalId)
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId)
    });    
  }

  const onCancelGoal = () => {
    setisAddMode(false);
  }

	return (
		<View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setisAddMode(true)} />
			<GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={onCancelGoal}/>

      <FlatList keyExtractor={(item, index) => item.id} data={courseGoals} renderItem={ itemData =>
        <GoalItem itemData={itemData.item} onDeleteItem={deleteHandler} />
      } />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50,
	}
});
