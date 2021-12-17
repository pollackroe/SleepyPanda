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

const ProfilePage = ({ navigation, name }) => {
  const backgroundImage = require("../assets/winterBackground.png");
  const pandaImage = require("../assets/panda1.png");
  const profilePicture = require("../assets/panda1.png");
  

  function handleNapPress() {
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
    profileBackground: {
        width: 350,
        height: 120,
        backgroundColor:'#D8E2D0',
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff',
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: 'center'
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
       <View style={styles.profileBackground}>
          <Image
            source={profilePicture}
            style={{ width: 80, height: 80, borderRadius: 40}}
          />
          <View>
            <Text style={{ fontSize: 25, textAlign: 'center', paddingBottom: 8}}>John Doe</Text>
            <View style={{flexDirection: "row"}}>
                <View style={{padding: 5, alignContent: 'center'}}>
                    <Text style={{ fontSize: 16, textAlign: 'center'}}>127</Text>
                    <Text style={{ fontSize: 10}}>hours napped</Text>
                </View>
                <View style={{padding: 5}}>
                    <Text style={{ fontSize: 16, textAlign: 'center'}}>4/21</Text>
                    <Text style={{ fontSize: 10}}>Pandas</Text>
                </View>
                <View style={{padding: 5}}>
                    <Text style={{ fontSize: 16, textAlign: 'center'}}>95%</Text>
                    <Text style={{ fontSize: 10}}>Success Rate</Text>
                </View>
            </View>          
          </View>
        </View>
        <View style={{ flex: 1, alignContent: "center", paddingTop: 20 }}>
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
              source={pandaImage}
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
            
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfilePage;
