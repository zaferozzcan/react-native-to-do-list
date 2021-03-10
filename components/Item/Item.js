import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Item(props) {
  return (
    <View>
      <View style={styles.itemLeft}></View>
      <Text>{props.text}</Text>
      <View style={styles.circle}></View>
    </View>
  );
}

const styles = {
  itemLeft: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "lightblue",
  },
  text: { fontSize: 20, fontWeigth: "bold" },
  circle: { width: 20, height: 20, borderRadius: 50 },
};
