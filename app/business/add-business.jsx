import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const addBusiness = () => {
  const navigation = useNavigation();
  const [image, setImage] = useState(null);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Business",
      headerShown: true,
    });
  }, []);

  const onImagePick = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //   aspect: [4, 3],
      quality: 1,
    });
    setImage(result?.assets[0].uri);
    // console.log(result, "re");
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
        Add New Business
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 12,
          color: "gray",
        }}
      >
        Fill all the details in order to add business
      </Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
        }}
        onPress={() => onImagePick()}
      >
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            width: 70,
            // height: 70,
            borderRadius: 10,
          }}
        >
          {!image ? (
            <Image
              source={require("../../assets/images/add-image.png")}
              style={{
                width: 50,
                height: 50,
              }}
            />
          ) : (
            <Image
              source={{ uri: image }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 15,
              }}
            />
          )}
        </View>
      </TouchableOpacity>
      <View style={{ marginTop: 10 }}>
        <TextInput
          placeholder="Name"
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
          }}
        />
      </View>
    </View>
  );
};

export default addBusiness;
