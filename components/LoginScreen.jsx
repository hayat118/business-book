import { View, Text, Image } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

const LoginScreen = () => {
  return (
    <View>
      <View>
        <Text style={{ fontSize: 30 }}>LoginScreen</Text>
        <Image source={require("../assets/images/favicon.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-medium",
            textAlign: "center",
          }}
        >
          Your altimate
          <Text style={{ color: Colors.Primary }}>Community Business Book</Text>
          App
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          Your favourite busines near you
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
