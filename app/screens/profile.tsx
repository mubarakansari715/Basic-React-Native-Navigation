import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import DetailsScreen from "./details";
import HomeScreen from "./home";

const Tabs = createMaterialTopTabNavigator();
const UserProfileScreen = () => {
  return (
    <ProfileTab/>
  );
};

const ProfileTab = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="home" component={HomeScreen} />
      <Tabs.Screen name="details" component={DetailsScreen} />
      <Tabs.Screen name="other" component={DetailsScreen} />
    </Tabs.Navigator>
  );
};

export default UserProfileScreen;
