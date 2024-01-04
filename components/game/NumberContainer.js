import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const deviceWidth=Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: "#ddb52f",
    padding: deviceWidth <380 ? 12: 24,
    margin: deviceWidth <380 ? 12: 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: "#ddb52f",
    fontSize: deviceWidth <380 ? 18: 36,
    // fontWeight:'bold'

  },
});
