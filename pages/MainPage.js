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

const MainPage = ({ navigation, name }) => {
  const backgroundImage = require("../assets/winterBackground.png");
  const pandaLayeredImage = require("../assets/panda1.png");

  //from mongo
  const namo = name;

  function handleNapPress() {
    return navigation.navigate("Nap");
  }

  function handleSleepPress() {
    return navigation.navigate("Nap");
  }

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
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#667b68",
      height: 40,
      width: 0,
      padding: 10,
      margin: 10,
      borderRadius: 10,
    },
  });
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="auto" />
      <View
        style={{
          flex: 1,
          padding: 20,
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 30,
            marginBottom: 15,
          }}
        >
          Welcome back, John Doe!
        </Text>
        <Text style={{ marginBottom: 30 }}>
          How long would you like to sleep today?
        </Text>
        <View style={{ flex: 1, alignContent: "center" }}>
          <ImageBackground
            source={backgroundImage}
            style={{
              width: 350,
              height: 350,
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={pandaLayeredImage}
              style={{
                height: 100,
                width: 100,
                borderRadius: 30,
                marginTop: 250,
                marginRight: 150,
              }}
            />
          </ImageBackground>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Pressable style={styles.button} onPress={handleNapPress}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Nap(30 mins)
              </Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleSleepPress}>
              <Text style={{ textAlign: "center", color: "white" }}>
                Sleep(8 hrs)
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainPage;
