import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";

const PrimaryButton = ({ children,onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.press, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: "#54032a" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 24,
    overflow: "hidden",
    margin: 4,
  },
  buttonInnerContainer: {
    backgroundColor: "",
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: "#470325",
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  press: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
