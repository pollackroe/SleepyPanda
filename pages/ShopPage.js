import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  // Image,
  // Button,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const ShopPage = () => {
  const backgroundImage = require("../assets/winterBackground.png");
  const styles = StyleSheet.create({
    coinText: {
      color: "black",
      fontSize: 15, // 42
      lineHeight: 34, // 84
      fontWeight: "bold",
      // textAlign: "center",
      // backgroundColor: "#000000c0",
      position: "absolute",
      top: 160,
      left: 10,
    },
    container: {
      flex: 1,
    },
    greyBoxes: {
      flex: 0.4,
      height: 200,
      backgroundColor: "lightgrey",
    },
    horizFrameAlignment: {
      height: 180,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
      marginBottom: 40,
    },
    itemName: {
      color: "black",
      fontSize: 15, // 42
      lineHeight: 34, // 84
      // fontWeight: "bold",
      // textAlign: "center",
      // backgroundColor: "#000000c0",
      position: "absolute",
      top: 130,
      left: 10,
    },
    scrollView: {
      top: 70,
      //marginHorizontal: 20,
      // padding: 10,
    },
    text: {
      color: "black",
      fontSize: 15, // 42
      lineHeight: 34, // 84
      // fontWeight: "bold",
      // textAlign: "center",
      // backgroundColor: "#000000c0",
      position: "absolute",
      top: 20,
      left: 10,
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
        <Text style={styles.text}>
          Buy panda eggs, boosts, timer skins and more!
        </Text>
        <SafeAreaView style={styles.container}>
          <ScrollView style={styles.scrollView}>
            <View style={styles.horizFrameAlignment}>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #1 Name</Text>
                <Text style={styles.coinText}>50 coins</Text>
              </View>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #2 Name</Text>
                <Text style={styles.coinText}>150 coins</Text>
              </View>
            </View>
            <View style={styles.horizFrameAlignment}>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #3 Name</Text>
                <Text style={styles.coinText}>200 coins</Text>
              </View>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #4 Name</Text>
                <Text style={styles.coinText}>250 coins</Text>
              </View>
            </View>
            <View style={styles.horizFrameAlignment}>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #5 Name</Text>
                <Text style={styles.coinText}>300 coins</Text>
              </View>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #6 Name</Text>
                <Text style={styles.coinText}>350 coins</Text>
              </View>
            </View>
            <View style={styles.horizFrameAlignment}>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #7 Name</Text>
                <Text style={styles.coinText}>100 coins</Text>
              </View>
              <View style={styles.greyBoxes}>
                <Text style={styles.itemName}>Item #8 Name</Text>
                <Text style={styles.coinText}>150 coins</Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default ShopPage;