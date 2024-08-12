import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";

const PopularBusiness = () => {
  return (
    <View>
      <View
        style={{
          marginTop: 10,
          padding: 20,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-medium",
            fontSize: 20,
          }}
        >
          Popular Business
        </Text>
        <Text
          style={{
            color: Colors.Primary,
            fontFamily: "outfit-medium",
          }}
        >
          View All
        </Text>
      </View>
    </View>
  );
};

export default PopularBusiness;
