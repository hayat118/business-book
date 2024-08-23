import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { Colors } from "../../constants/Colors";
import Category from "../../components/Home/Category";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import ExploreBusinessList from "../../components/Explore/ExploreBusinessList";

const explore = () => {
  const [businessList, setBusinessList] = useState([]);

  //
  const getBusinessByCategory = async (category) => {
    setBusinessList([]);
    try {
      const q = query(
        collection(db, "BusinessList"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
          padding: 20,
        }}
      >
        Explore More
      </Text>
      {/* Search Bar */}

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
          borderWidth: 1,
          borderColor: Colors.Primary,
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

      {/* Category */}
      <Category
        explore={true}
        onCategorySelect={(category) => getBusinessByCategory(category)}
      />

      {/* Business List */}
      <ExploreBusinessList businessList={businessList} />
    </View>
  );
};

export default explore;
