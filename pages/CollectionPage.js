import React from "react";
import ImageBackground from "react-native/Libraries/Image/ImageBackground";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
  ScrollView
} from "react-native";
import { StatusBar } from "expo-status-bar";

const CollectionPage = () => {
  const backgroundImage = require("../assets/livingRoomBackground.png");
  const pandaImage = require("../assets/panda1.png");
  const frameImage = require("../assets/picture-frame.png");
  const mysteryImage = require("../assets/mystery.png");
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    scrollView: {
      top: 70,
      marginHorizontal: 20,
    },
    text: {
      color: "black",
      fontSize: 15,
      lineHeight: 34,
      //fontWeight: "bold",
      //textAlign: "center",
      //backgroundColor: "#000000c0",
      position: 'absolute',
      top: 20,
      left: 10,
    },
    backgroundImage: {
      flex: 1,
      justifyContent: "center",
    },
    panda: {
      width: 110,
      height: 110,
    },
    frame: {
      width: 160,
      height: 160,
      justifyContent: 'center',
      alignItems: 'center',
    },
    framesPerRow: {
      height: 180,
      //position: 'absolute',
      flexDirection: 'row',  // horizontal
      justifyContent: 'space-evenly', // main axis
      alignItems: 'center', // secondary axis
    },
  });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImage}
        > 
       <Text style={styles.text}>View the pandas you have collected so far!</Text>
      <SafeAreaView style={styles.container}>
       <ScrollView style={styles.scrollView}>
       <View style={styles.framesPerRow}>
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={pandaImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={pandaImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
      </View>
      <View style={styles.framesPerRow}>
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={mysteryImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={pandaImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
      </View>
      {<View style={styles.framesPerRow}>
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={pandaImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={mysteryImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
      </View>}
      {<View style={styles.framesPerRow}>
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={mysteryImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
        {<ImageBackground 
          source={frameImage}
          style={styles.frame}>
          <View style={styles.panda}>
            <Image 
              source={mysteryImage}
              style={styles.panda}
                />
          </View>
        </ImageBackground>}
      </View>}
        </ScrollView>
      </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default CollectionPage;

