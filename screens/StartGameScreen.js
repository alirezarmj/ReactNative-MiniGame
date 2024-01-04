import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickedNumber }) => {
  const [enteredNumber, setEnteredNumber] = useState("");
  function handleReset() {
    setEnteredNumber("");
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredNumber);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        "Invalid number!",
        "Number has to be a number between 0 and 99!",
        [{ text: "Ok", style: "destructive", onPress: handleReset }]
      );
      return;
    }
    // console.log('Valid number')
    onPickedNumber(chosenNumber);
  };

  const { width, height } = useWindowDimensions();
  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.screen}>
    <KeyboardAvoidingView style={styles.screen} behavior="position">
      <View style={[styles.rootStyle, { marginTop: marginTopDistance }]}>
        <Title>Geuss My Number</Title>
        <Card>
          <InstructionText>Enter a Number</InstructionText>
          <TextInput
            style={styles.numberInput}
            maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={enteredNumber}
            onChangeText={(e) => setEnteredNumber(e)}
          />
          <View style={styles.buttonContainers}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={handleReset}>Reset</PrimaryButton>
            </View>

            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                Confirm
              </PrimaryButton>
            </View>
          </View>
        </Card>
      </View>
    </KeyboardAvoidingView>
     </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  rootStyle: {
    flex: 1,
    alignItems: "center",
    marginTop: 100,
  },
  inputContainer: {
    marginTop: 36,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#59032f",
    marginHorizontal: 24,
    borderRadius: 8,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInput: {
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    fontSize: 32,
    height: 50,
    width: 50,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },

  buttonContainers: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
