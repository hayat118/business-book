import { View, Text, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { collection, getDocs, query, where } from "@firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { Colors } from "../../constants/Colors";

const BusinessListByCategory = () => {
  const navigation = useNavigation();
  const { category } = useLocalSearchParams();
  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: category,
    });
    getBusinessList();
  }, []);

  //   get the business list by category

  const getBusinessList = async () => {
    setLoading(true);

    setBusinessList([]);

    try {
      const q = query(
        collection(db, "CategoryList"),
        where("category", "==", category)
      );
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setBusinessList((prev) => [...prev, { id: doc?.id, ...doc.data() }]);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      {businessList?.length > 0 && loading == false ? (
        <FlatList
          data={businessList}
          onRefresh={getBusinessList}
          refreshing={loading}
          renderItem={({ item, index }) => (
            <BusinessListCard business={item} key={index} />
          )}
        />
      ) : loading ? (
        <ActivityIndicator
          style={{
            marginTop: "50%",
          }}
          size={"large"}
          color={Colors.Primary}
        />
      ) : (
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 24,
            textAlign: "center",
            marginTop: 10,
            color: "gray",
          }}
        >
          No Business Found
        </Text>
      )}
    </View>
  );
};

export default BusinessListByCategory;
