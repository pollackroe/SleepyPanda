import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  Pressable,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const NapTimerPage = ({ navigation }) => {
  const sleepingPandaImage = require("../assets/TimerPanda.png");
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
      <Text style={{ marginBottom: 50 }}>
        Select your desired amount of time to nap.
      </Text>
      <View style={{ alignItems: "center", flex: 1 }}>
        <Image
          source={sleepingPandaImage}
          style={{
            height: 350,
            width: 350,
            resizeMode: "contain",
          }}
        />
        <Pressable
          style={styles.button}
          onPress={() => {
            navigation.navigate("Naptime");
          }}
        >
          <Text style={{ textAlign: "center", color: "white" }}>Start Nap</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NapTimerPage;
