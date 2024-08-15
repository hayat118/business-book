import { View, Text, Image } from "react-native";
import React from "react";

const BusinessListCard = ({ business }) => {
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 15,
        backgroundColor: "white",
        margin: 10,
        display: "flex",
        flexDirection: "row",
        gap: 10,
      }}
    >
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: 120,
          height: 120,
          borderRadius: 15,
        }}
      />
      <View>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 15,
          }}
        >
          {business.name}
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            color: "gray",
          }}
        >
          {business.address}
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
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
      </View>
    </View>
  );
};

export default BusinessListCard;
