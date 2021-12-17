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
import RNDateTimePicker from "@react-native-community/datetimepicker";

const NapTimerPage = ({ navigation }) => {
  const sleepingPandaImage = require("../assets/TimerPanda.png");

  function handleEndNapPress() {
    setIsNapping(false);
    setAtSelectTiming(true);
    setTimerDuration(60);
  }

  const [isNapping, setIsNapping] = React.useState(false);
  const [atSelectTiming, setAtSelectTiming] = React.useState(true);
  const [timerDuration, setTimerDuration] = React.useState(60);

  const [date, setDate] = React.useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const TimerComponent = () => {
    return (
      <View style={{ alignItems: "center" }}>
        <CountdownCircleTimer
          isPlaying
          duration={timerDuration}
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
                fontSize: 50,
              }}
            >
              {remainingTime}
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
      maxHeight: 40,
    },
  });

  if (atSelectTiming) {
    return (
      <View style={{ flex: 1, padding: 20 }}>
        <StatusBar style="auto" />
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 15,
          }}
        >
          Nap
        </Text>
        <Text>Select your desired amount of time to nap.</Text>
        <View
          style={{
            marginTop: 20,
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View style={{ flex: 1, maxHeight: 300 }}>
            <Image
              source={sleepingPandaImage}
              style={{
                height: 300,
                width: 300,
                resizeMode: "contain",
              }}
            />
          </View>
          <RNDateTimePicker
            style={{
              height: 200,
              width: 350,
            }}
            testID="dateTimePicker"
            minimumDate={Date.now() + 60000}
            value={date}
            mode="time"
            is24Hour={true}
            display="spinner"
            onChange={onChange}
          />

          <Pressable
            style={styles.button}
            onPress={() => {
              const currentTime = new Date();
              var diff = date.getTime() - currentTime.getTime();
              diff /= 1000;
              diff = Number.parseInt(diff.toFixed(0));
              console.log(
                "current time in seconds= " +
                  currentTime.getTime() +
                  "\ngiven time in seconds= " +
                  date.getTime() +
                  "\ndifference found= " +
                  diff +
                  " seconds"
              );
              setTimerDuration(diff);
              setAtSelectTiming(false);
            }}
          >
            <Text style={{ textAlign: "center", color: "white" }}>
              Start Nap
            </Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
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
          style={{
            flex: 1,
            flexDirection: "row",
            maxHeight: 60,
            marginTop: 50,
          }}
        >
          <Pressable style={styles.button} onPress={handleEndNapPress}>
            <Text style={{ textAlign: "center", color: "white" }}>
              End Nap (lose 30 exp)
            </Text>
          </Pressable>
        </View>
      </View>
    );
  }
};

export default NapTimerPage;
