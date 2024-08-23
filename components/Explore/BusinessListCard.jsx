import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const BusinessListCard = ({ business }) => {
  const router = useRouter();

  //
  return (
    <TouchableOpacity
      onPress={() => router.push("/businessdetails/" + business?.id)}
      style={{
        padding: 20,
        backgroundColor: "white",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        marginTop: 10,
      }}
    >
      <Image
        source={{ uri: business?.imageUrl }}
        style={{
          width: "100%",
          height: 150,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
        }}
      />
      <View
        style={{
          padding: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 18,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
            color: "gray",
          }}
        >
          {business.address}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BusinessListCard;
