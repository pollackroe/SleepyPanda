import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const ShopPage = () => {
  const backgroundImage = require("../assets/winterBackground.png");
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
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <Text style={styles.text}>huh</Text>
      </ImageBackground>
    </View>
  );
};

export default ShopPage;
