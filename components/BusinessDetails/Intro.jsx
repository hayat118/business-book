import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ToastAndroid,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { db } from "../../configs/FirebaseConfig";
import { doc, deleteDoc } from "firebase/firestore";
import { useUser } from "@clerk/clerk-expo";

const Intro = ({ business }) => {
  const router = useRouter();
  const { user } = useUser();

  //
  const onDelete = () => {
    Alert.alert("Do you want to delete?", "Are you sure?", [
      {
        text: "Cancel",
        style: "cancle",
      },
      {
        text: "Delete",
        style: "destrutive",
        onPress: () => deleteBusiness(),
      },
    ]);
  };

  const deleteBusiness = async () => {
    try {
      await deleteDoc(doc(db, "CategoryList", business?.id));
      router.back();
      ToastAndroid.show("Business Dleted!", ToastAndroid.LONG);
    } catch (error) {
      console.log(error);
    }
  };

  //
  return (
    <View>
      <View
        style={{
          position: "absolute",
          zIndex: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          padding: 40,
        }}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back-circle" size={40} color="black" />
        </TouchableOpacity>
        <Ionicons name="heart-outline" size={40} color="black" />
      </View>
      <Image
        source={{ uri: business.imageUrl }}
        style={{
          width: "100%",
          height: 350,
        }}
      />
      <View
        style={{
          padding: 20,
          marginTop: -20,
          backgroundColor: "white",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <View
          style={{
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
            {business.name}
          </Text>
          {user?.primaryEmailAddress?.emailAddress ==
            business?.emailAddress && (
            <TouchableOpacity onPress={() => onDelete()}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          )}
        </View>

        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 15,
          }}
        >
          {business.address}
        </Text>
      </View>
    </View>
  );
};

export default Intro;
