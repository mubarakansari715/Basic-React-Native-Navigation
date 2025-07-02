import React from "react";
import { Button, Text, View } from "react-native";

const DetailsScreen = ({ navigation }: any) => {
  return (
    <View style={{ margin: 10, gap: 20 }}>
      <Text>DetailsScreen</Text>
      <Button
        title="Profile screen"
        onPress={() => {
          navigation.navigate("profile");
        }}
      />

      <Button
        title="Model Screen"
        onPress={() => {
          navigation.navigate("Modal");
        }}
      />

      <Button
        title="Bottom Screen"
        onPress={() => {
          navigation.navigate("bottomsheet");
        }}
      />

      <Button
        title="Drawer Screen"
        onPress={() => {
          navigation.navigate("drawer");
        }}
      />
    </View>
  );
};

export default DetailsScreen;
