import { View, Text, Image } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";

const UserIntro = () => {
  const { user } = useUser();
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={{ uri: user?.imageUrl }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 99,
          marginTop: 30,
        }}
      />
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        {user?.fullName}
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 16,
        }}
      >
        {user?.primaryEmailAddress?.emailAddress}
      </Text>
    </View>
  );
};

export default UserIntro;
