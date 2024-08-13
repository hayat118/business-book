import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, getDocs, limit, query } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import PopularBusinessCard from "./PopularBusinessCard";

const PopularBusiness = () => {
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    GetBusinessList();
  }, []);

  const GetBusinessList = async () => {
    setBusinessList([]);
    try {
      const q = query(collection(db, "BusinessList"), limit(10));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        setBusinessList((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.log(error);
    }
  };

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
      <FlatList
        data={businessList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <View>
            <PopularBusinessCard key={index} business={item} />
          </View>
        )}
      />
    </View>
  );
};

export default PopularBusiness;
