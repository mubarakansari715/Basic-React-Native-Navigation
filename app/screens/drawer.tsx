import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import HomeScreen from "./home";
import UserProfileScreen from "./profile";

const Drawer = createDrawerNavigator();

const DrawerScreen = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStatusBarAnimation:'slide',
        drawerActiveTintColor: 'white',
        drawerInactiveTintColor: 'gray',
        drawerActiveBackgroundColor: '#003CB3',
        freezeOnBlur: true
       
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={UserProfileScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerScreen;
