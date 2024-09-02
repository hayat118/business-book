import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Share,
} from "react-native";
import React from "react";
import { Colors } from "../../constants/Colors";
import { useRouter } from "expo-router";
import { useAuth } from "@clerk/clerk-expo";

const MenuList = () => {
  const { signOut } = useAuth();

  const menuList = [
    {
      id: 1,
      name: "Add Business ",
      icon: require("../../assets/images/add.png"),
      path: "/business/add-business",
    },
    {
      id: 2,
      name: "My Business",
      icon: require("../../assets/images/investment.png"),
      path: "/business/my-business",
    },
    {
      id: 3,
      name: "Share App",
      icon: require("../../assets/images/send.png"),
      path: "share",
    },
    {
      id: 4,
      name: "Logout",
      icon: require("../../assets/images/log-out.png"),
      path: "logout",
    },
  ];

  //
  const router = useRouter();

  const onMenuClick = (item) => {
    if (item.path == "logout") {
      signOut();
      return;
    }

    if (item.path == "share") {
      Share.share({
        message: "Download the Business Book App by Tarique , Download URL:",
      });
      return;
    }
    router.push(item.path);
  };
  //

  return (
    <View
      style={{
        marginTop: 30,
      }}
    >
      <FlatList
        data={menuList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => onMenuClick(item)}
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              flex: 1,
              padding: 10,
              borderRadius: 10,
              borderWidth: 1,
              margin: 10,
              backgroundColor: "white",
              borderColor: Colors.Primary,
            }}
          >
            <Image
              source={item.icon}
              style={{
                width: 40,
                height: 40,
              }}
            />
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 14,
                flex: 1,
              }}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 8,
          textAlign: "center",
          marginTop: 50,
          color: "gray",
        }}
      >
        Developed By Tarique Hayat @2024
      </Text>
    </View>
  );
};

export default MenuList;
