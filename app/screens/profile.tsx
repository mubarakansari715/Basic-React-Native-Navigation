import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailsScreen from "./details";
import HomeScreen from "./home";

const Tabs = createMaterialTopTabNavigator();

const BadgeComponent = () => (
  <View style={styles.badge}>
    <Text style={styles.badgeText}>9</Text>
  </View>
);

const styles = StyleSheet.create({
  badge: {
    backgroundColor: "red",
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 4,
  },
  badgeText: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },
});

const UserProfileScreen = () => {
  return <ProfileTab />;
};

const ProfileTab = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: true,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: true,
          tabBarLabel: ({ color, focused }) => (
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  color: focused ? "black" : color,
                  fontWeight: focused ? "bold" : "normal",
                  marginRight: 4,
                  textTransform: "uppercase",
                }}
              >
                home
              </Text>
              <BadgeComponent />
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="details"
        component={DetailsScreen}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? "black" : color,
                fontWeight: focused ? "bold" : "normal",
                textTransform: "uppercase",
              }}
            >
              details
            </Text>
          ),
        }}
      />
      <Tabs.Screen
        name="other"
        component={DetailsScreen}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text
              style={{
                color: focused ? "black" : color,
                fontWeight: focused ? "bold" : "normal",
                textTransform: "uppercase",
              }}
            >
              other
            </Text>
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default UserProfileScreen;
