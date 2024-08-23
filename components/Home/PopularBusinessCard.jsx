import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";

const PopularBusinessCard = ({ business }) => {
  const router = useRouter();
  return (
    // solve this {onpress} to link to details the business
    <TouchableOpacity
      // onPress={() => router.push("/businessdetails/" + business?.id)}
      style={{
        marginLeft: 20,
        padding: 10,
        backgroundColor: "white",
        borderRadius: 15,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: 200,
          height: 130,
          borderRadius: 15,
        }}
      />
      <View
        style={{
          marginLeft: 20,
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 12,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 10,
            color: "gray",
          }}
        >
          {business.address}
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            marginLeft: 20,
          }}
        >
          <Image
            source={require("../../assets/images/star.png")}
            style={{
              width: 10,
              height: 10,
            }}
          />
          <Text
            style={{
              fontSize: 10,
            }}
          >
            4.5
          </Text>
        </View>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 8,
            backgroundColor: Colors.Primary,
            color: "white",
            borderRadius: 15,
            padding: 5,
          }}
        >
          {business.category}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PopularBusinessCard;
