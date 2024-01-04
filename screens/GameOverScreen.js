import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
  ScrollView,
} from "react-native";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ userNumber, gameRounds, onStartNewGame }) => {
  const { width, height } = useWindowDimensions();
  let imageSize = 300;
  if (width < 380) {
    imageSize = 150;
  }
  if (height < 400) {
    imageSize = 100;
  }
  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
  };
  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER!</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image
            style={styles.image}
            source={require("../assets/images/success.png")}
          />
        </View>
        <Text style={styles.summaryText}>
          Your found neede <Text style={styles.hilightText}>{gameRounds}</Text>{" "}
          rounds to guess the number{" "}
          <Text style={styles.hilightText}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  );
};

export default GameOverScreen;

// const deviceWidth=Dimensions.get('window').width

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 30,
  },
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 14,
  },
  imageContainer: {
    // width: deviceWidth<380 ? 150 :300,
    // height: deviceWidth<380 ? 150 :300,
    // borderRadius:deviceWidth<380 ? 75 :150,
    overflow: "hidden",
    margin: 36,
    borderWidth: 3,
    borderColor: "#250314",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    // fontFamily: "open-sans",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
  },
  hilightText: {
    // fontFamily: "open-sans-bold",
    fontWeight: "bold",
    color: "#5d0531",
  },
});
