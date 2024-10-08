import {
  View,
  Text,
  ActivityIndicator,
  //   ScrollView,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-virtualized-view";

import React, { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { collection, doc, getDoc } from "@firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import Intro from "../../components/BusinessDetails/Intro";
import ActionButton from "../../components/BusinessDetails/ActionButton";
import About from "../../components/BusinessDetails/About";
import Reviews from "../../components/BusinessDetails/Reviews";

const BusinessDetails = () => {
  const { businessid } = useLocalSearchParams();
  const [business, setBusiness] = useState([]);
  const [loading, setLoading] = useState([false]);

  useEffect(() => {
    GetBusinessDetailsById();
  }, []);

  //   get the deatils by id
  const GetBusinessDetailsById = async () => {
    setLoading(true);
    setBusiness([]);
    try {
      const docRef = doc(db, "CategoryList", businessid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setBusiness({ id: docSnap.id, ...docSnap.data() });
        setLoading(false);
      } else {
        console.log("No Such Data Is Found!");
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      {loading ? (
        <ActivityIndicator
          style={{
            marginTop: "70%",
          }}
          size={"large"}
          color={Colors.Primary}
        />
      ) : (
        <View>
          {/* Intro */}
          <Intro business={business} />
          {/* Action Button */}
          <ActionButton business={business} />
          {/* About Section */}
          <About business={business} />
          {/* Review Section */}
          <Reviews business={business} />
        </View>
      )}
    </ScrollView>
  );
};

export default BusinessDetails;
