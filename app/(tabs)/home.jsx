import { View, Text } from "react-native";
import React from "react";
import Header from "../../components/Home/Header";
import Slider from "../../components/Home/Slider";
import Category from "../../components/Home/Category";
import PopularBusiness from "../../components/Home/PopularBusiness";

const home = () => {
  return (
    <View>
      {/* Header */}
      <Header />

      {/* Slide */}
      <Slider />
      {/* Category */}
      <Category />
      {/* Popular Business List */}
      <PopularBusiness />
    </View>
  );
};

export default home;
