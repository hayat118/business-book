import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { Colors } from "../../constants/Colors";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Header = () => {
  const { user } = useUser();

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: Colors.Primary,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Image
          source={{ uri: user?.imageUrl }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 99,
          }}
        />
        <View>
          <Text
            style={{
              color: "white",
            }}
          >
            Welcome
          </Text>
          <Text
            style={{
              fontSize: 20,
              fontFamily: "outfit-medium",
              color: "white",
            }}
          >
            {user?.fullName}
          </Text>
        </View>
      </View>
      {/* searchbar */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 5,
          alignItems: "center",
          margin: 10,
          backgroundColor: "white",
          padding: 5,
          borderRadius: 6,
        }}
      >
        <EvilIcons name="search" size={24} color={Colors.Primary} />
        <TextInput
          placeholder="Search..."
          style={{
            fontFamily: "outfit",
            fontSize: 15,
          }}
        />
      </View>
    </View>
  );
};

export default Header;
