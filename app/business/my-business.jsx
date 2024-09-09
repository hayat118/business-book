import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-expo";
import { db } from "../../configs/FirebaseConfig";
import { collection, getDocs, query, where } from "@firebase/firestore";
import BusinessListCard from "../../components/BusinessList/BusinessListCard";
import { useNavigation } from "expo-router";
import { Colors } from "../../constants/Colors";

const MyBusiness = () => {
  const { user } = useUser();

  const [businessList, setBusinessList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: "My Business",
      headerStyle: {
        backgroundColor: Colors.Primary,
      },
    });

    user && GetUserBusiness();
  }, [user]);

  //   Used to get business list by User

  const GetUserBusiness = async () => {
    setLoading(true);
    setBusinessList([]);
    try {
      const q = query(
        collection(db, "CategoryList"),
        where("userEmail", "==", user?.primaryEmailAddress?.emailAddress)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.data());
        setBusinessList((prev) => [...prev, { id: doc.id, ...doc.data() }]);
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-medium",
          fontSize: 20,
        }}
      >
        My Business
      </Text>
      <FlatList
        data={businessList}
        onRefresh={GetUserBusiness}
        refreshing={loading}
        renderItem={({ item, index }) => (
          <BusinessListCard business={item} key={index} />
        )}
      />
    </View>
  );
};

export default MyBusiness;
