import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

export default function App() {
  const [gameRounds, setGameRounds] = useState(0);

  const [fontLoaded] = useFonts({
    // "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    // "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  if (!fontLoaded) {
    <AppLoading />;
  }
  function handleReset() {
    setUserInputNumber(null);
  }
  const [userInputNumber, setUserInputNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);

  function handlePickedNumber(pickedNumber) {
    setUserInputNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(roundsNumber) {
    setGameIsOver(true);
    setGameRounds(roundsNumber);
  }
  let screen = <StartGameScreen onPickedNumber={handlePickedNumber} />;
  if (userInputNumber) {
    screen = (
      <GameScreen userNumber={userInputNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userInputNumber) {
    screen = (
      <GameOverScreen
        gameRounds={gameRounds}
        userNumber={userInputNumber}
        onStartNewGame={handleReset}
      />
    );
  }

  return (
    <>
      {/* <StatusBar style="dark"/>  */}
      <LinearGradient colors={["#72063c", "#ddb52f"]} style={styles.rootScreen}>
        <ImageBackground
          source={require("./assets/images/background.png")}
          resizeMode="cover"
          style={styles.rootScreen}
          imageStyle={styles.imageStyle}
        >
          <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.15,
  },
});
