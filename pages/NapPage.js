import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  Animated,
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";

const NapPage = ({ navigation }) => {
  const duration = 70;

  const [isPlaying, setIsPlaying] = React.useState(true);

  function handleEndNapPress() {
    setIsPlaying(false);
    // ideally here we will deduct the lost exp and inform the user he ended nap early.
  }

  const TimerComponent = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <CountdownCircleTimer
          isPlaying={isPlaying}
          duration={duration}
          colors={[
            ["#004777", 0.4],
            ["#F7B801", 0.4],
            ["#A30000", 0.2],
          ]}
        >
          {({ remainingTime, animatedColor }) => (
            <Animated.Text
              style={{
                color: animatedColor,
                textAlign: "center",
                textAlignVertical: "auto",
              }}
            >
              Nap for another {remainingTime} seconds...
            </Animated.Text>
          )}
        </CountdownCircleTimer>
        <View></View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000c0",
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
    },
    button: {
      flex: 1,
      backgroundColor: "#667b68",
      width: 100,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
  });
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "bold",
          marginTop: 30,
          marginBottom: 15,
        }}
      >
        Naptime
      </Text>
      <Text style={{ marginBottom: 100 }}>
        Close your eyes and rest even if you can't fall asleep.
      </Text>
      <StatusBar style="auto" />
      <TimerComponent />
      <View
        style={{ flex: 1, flexDirection: "row", maxHeight: 60, marginTop: 50 }}
      >
        <Pressable style={styles.button} onPress={handleEndNapPress}>
          <Text style={{ textAlign: "center", color: "white" }}>
            End Nap (lose 30 exp)
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NapPage;
