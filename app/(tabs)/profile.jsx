import { View, Text } from "react-native";
import React from "react";
import UserIntro from "../../components/Profile/UserIntro";
import MenuList from "../../components/Profile/MenuList";

const profile = () => {
  return (
    <View
      style={{
        padding: 20,
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 30,
        }}
      >
        profile
      </Text>
      {/* User Intro */}
      <UserIntro />
      {/* Menu list */}
      <MenuList />
    </View>
  );
};

export default profile;
