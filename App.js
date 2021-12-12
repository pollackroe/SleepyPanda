import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  Button,
} from "react-native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import MainPage from "./pages/MainPage";
import NapPage from "./pages/NapPage";
import CollectionPage from "./pages/CollectionPage";
import ShopPage from "./pages/ShopPage";
import AchievementsPage from "./pages/AchievementsPage";

export default function App() {
  const Drawer = createDrawerNavigator();

  //Profile pict placeholder asset, eventually retrieved from mongo via URI
  const profilePict = require("./assets/panda1.png");
  //Placeholder name, eventually retrieved from mongo
  const fullName = "John Doe";
  //Placeholder line 2, eventually retrieved from mongo
  const line2placeholder = "placeholder@email.com";

  const CustomDrawer = (props) => {
    return (
      <DrawerContentScrollView {...props}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20,
            backgroundColor: "ffffff",
          }}
        >
          <View>
            <Text style={{ fontSize: 20 }}>{fullName}</Text>
            <Text>{line2placeholder}</Text>
          </View>
          <Image
            source={profilePict}
            style={{ width: 60, height: 60, borderRadius: 30 }}
          />
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    );
  };

  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <CustomDrawer {...props} />}
        screenOptions={{
          headerShown: true,
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
          },
          //headerTitle: "",
        }}
      >
        <Drawer.Screen name="Main" component={MainPage} />
        <Drawer.Screen name="Nap" component={NapPage} />
        <Drawer.Screen name="Collection Page" component={CollectionPage} />
        <Drawer.Screen name="Shop" component={ShopPage} />
        <Drawer.Screen name="Achievements" component={AchievementsPage} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
