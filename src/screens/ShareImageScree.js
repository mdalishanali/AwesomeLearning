import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Share from "react-native-share";
export default function ShareImageScree() {
  const shareImage = () => {
    const options = {
      url: "https://cdn.pixabay.com/photo/2023/01/08/18/42/road-7705906_960_720.jpg",
      message: "This is message",
    };
    Share.open(options);
  };
  return (
    <View>
      <TouchableOpacity onPress={shareImage}>
        <Text>ShareImageScree</Text>
      </TouchableOpacity>
    </View>
  );
}
