import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  //   get the business list by category
  const getBusinessList = async () => {
    setBusinessList([]);

    try {
      const q = query(
        collection(db, "CategoryList"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data(), "abcd");
        setBusinessList((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      <FlatList
        data={businessList}
        renderItem={({ item, index }) => {
          <BusinessListCard business={item} key={index} />;
        }}
      />
    </View>
  );
};

export default BusinessListByCategory;
