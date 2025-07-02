import React from "react";
import { Button, Text, View } from "react-native";

const DetailsScreen = ({ navigation }: any) => {
  return (
    <View>
      <Text>DetailsScreen</Text>
      <Button title="Next screen" onPress={()=>{
        navigation.navigate("profile")
      }}/>
    </View>
  );
};

export default DetailsScreen;
