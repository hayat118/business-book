import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import React from "react";

const ActionButton = ({ business }) => {
  const actionButtonMenu = [
    {
      id: 1,
      name: "Call",
      icon: require("../../assets/images/phone-call.png"),
      url: "tel:" + business?.contact,
    },
    {
      id: 2,
      name: "Location",
      icon: require("../../assets/images/placeholder.png"),
      url:
        "https://www.google.com/maps/search/?api=1&query=" + business?.contact,
    },
    {
      id: 3,
      name: "Web",
      icon: require("../../assets/images/web.png"),
      url: business?.webSite,
    },
    {
      id: 4,
      name: "Share",
      icon: require("../../assets/images/share.png"),
      url: "tel:" + business?.contact,
    },
  ];

  const OnPressHandle = (item) => {
    if (item.name === "Share" || item.name === "Web") {
      return;
    }
    Linking.openURL(item.url);
  };
  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <FlatList
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={actionButtonMenu}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => OnPressHandle(item)}>
            <Image
              source={item?.icon}
              key={index}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              {item?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ActionButton;
