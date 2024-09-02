import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import RNPickerSelect from "react-native-picker-select";
import { collection, getDocs, query } from "firebase/firestore";
import { db, storage } from "../../configs/FirebaseConfig";
import { Colors } from "../../constants/Colors";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useUser } from "@clerk/clerk-expo";
import { doc, setDoc } from "firebase/firestore";

const addBusiness = () => {
  const { user } = useUser();
  const navigation = useNavigation();
  const [image, setImage] = useState(null);
  const [categoryList, setCategoryList] = useState([]);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [contact, setContact] = useState();
  const [website, setWebsite] = useState();
  const [about, setAbout] = useState();
  const [category, setCategory] = useState();
  const [laoding, setLoading] = useState(false);

  //
  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Add New Business",
      headerShown: true,
    });
    GetCategoryList();
  }, []);
  //

  const onImagePick = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      //   aspect: [4, 3],
      quality: 1,
    });
    setImage(result?.assets[0].uri);
  };

  const GetCategoryList = async () => {
    setCategoryList([]);
    try {
      const q = query(collection(db, "Category"));
      const snapShot = await getDocs(q);

      snapShot.forEach((doc) => {
        // console.log(doc.data());
        setCategoryList((prev) => [
          ...prev,
          {
            label: doc.data().name,
            value: doc.data().name,
          },
        ]);
      });
    } catch (error) {
      console.log(error);
    }
  };
  //
  const onAddNewBusiness = async () => {
    setLoading(true);
    try {
      const fileName = Date.now().toString() + ".jpg";
      const res = await fetch(image);

      const blob = await res.blob();
      const imageRef = ref(storage, "business-app" + fileName);

      await uploadBytes(imageRef, blob)
        .then((snapshot) => {
          console.log("File Uploaded...");
        })
        .then((res) => {
          getDownloadURL(imageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            saveBusinessDetails(downloadUrl);
          });
        });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  //
  const saveBusinessDetails = async (imageUrl) => {
    try {
      await setDoc(doc(db, "CategoryList", Date.now().toString()), {
        name: name,
        address: address,
        contact: contact,
        about: about,
        website: website,
        category: category,
        username: user?.fullName,
        userEmail: user?.primaryEmailAddress?.emailAddress,
        userImage: user?.imageUrl,
        imageUrl: imageUrl,
      });
      setLoading(false);
      ToastAndroid.show("New Business Added...", ToastAndroid.LONG);
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
      <View>
        <TextInput
          placeholder="Name"
          onChangeText={(value) => setName(value)}
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
            marginTop: 10,
            borderColor: Colors.Primary,
          }}
        />
        <TextInput
          placeholder="Address"
          onChangeText={(value) => setAddress(value)}
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
            marginTop: 10,
            borderColor: Colors.Primary,
          }}
        />
        <TextInput
          placeholder="Contact"
          onChangeText={(value) => setContact(value)}
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
            marginTop: 10,
            borderColor: Colors.Primary,
          }}
        />
        <TextInput
          placeholder="Website"
          onChangeText={(value) => setWebsite(value)}
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
            marginTop: 10,
            borderColor: Colors.Primary,
          }}
        />
        <TextInput
          multiline={true}
          numberOfLines={3}
          placeholder="About"
          onChangeText={(value) => setAbout(value)}
          style={{
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            fontSize: 15,
            backgroundColor: "white",
            marginTop: 10,
            height: 100,
            borderColor: Colors.Primary,
          }}
        />
      </View>
      <View
        style={{
          borderRadius: 5,
          borderWidth: 1,
          fontSize: 15,
          backgroundColor: "white",
          marginTop: 10,
          borderColor: Colors.Primary,
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          items={categoryList}
        />
      </View>
      <TouchableOpacity
        disabled={laoding}
        style={{
          padding: 15,
          backgroundColor: Colors.Primary,
          borderRadius: 5,
          marginTop: 20,
        }}
        onPress={() => onAddNewBusiness()}
      >
        {laoding ? (
          <ActivityIndicator size={"large"} color={"white"} />
        ) : (
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 16,
              textAlign: "center",
              color: "white",
            }}
          >
            Add New Business
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default addBusiness;
