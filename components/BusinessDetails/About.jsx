import { View, Text } from "react-native";
import React from "react";

const About = ({ business }) => {
  return (
    <View
      style={{
        padding: 20,

        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        About
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          lineHeight: 25,
        }}
      >
        {business?.about}
      </Text>
    </View>
  );
};

export default About;
