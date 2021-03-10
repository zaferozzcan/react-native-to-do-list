import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.toDoListWrapper}>
        <Text style={styles.title}>Today's Task List</Text>
        <hr></hr>
        <View style={styles.toDoList}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  toDoListWrapper: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  title: {
    fontSize: 20,
  },
  toDoList: {},
});
