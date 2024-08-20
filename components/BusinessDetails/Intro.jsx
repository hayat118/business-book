import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";

const Intro = ({ business }) => {
  const router = useRouter();
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 40,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="black" />
      </View>
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
          }}
        >
          {business.address}
        </Text>
      </View>
    </View>
  );
};

export default Intro;
