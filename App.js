import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.toDoListWrapper}>
        <Text style={styles.title}>Today's List</Text>
        <hr></hr>
        <View style={styles.toDoList}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  toDoListWrapper: {
    fontSize: 20,
    paddingTop: 80,
    paddingHorizontal: 20,
    backgroundColor: "lightblue",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  toDoList: {},
});
