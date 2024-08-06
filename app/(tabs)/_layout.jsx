import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color }) => (
            <Feather name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "People-Circle",
          tabBarIcon: ({ color }) => (
            <Ionicons name="people-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
