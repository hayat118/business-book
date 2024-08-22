import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  FlatList,
  SafeAreaView,
  Image,
} from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import { useUser } from "@clerk/clerk-expo";

const Reviews = ({ business }) => {
  const [rating, setrating] = useState(4);
  const [userInput, setUserInput] = useState();
  const { user } = useUser();

  const onsubmit = async () => {
    const docRef = doc(db, "CategoryList", business?.id);
    await updateDoc(docRef, {
      reviews: arrayUnion({
        rating: rating,
        comment: userInput,
        userName: user?.fullName,
        userImage: user?.imageUrl,
        userEmail: user?.primaryEmailAddress?.emailAddress,
      }),
    });
    ToastAndroid.show("Comment Added Successfully", ToastAndroid.BOTTOM);
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
        Reviews
      </Text>
      <View>
        <Rating
          showRating
          onFinishRating={(rating) => setrating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <TextInput
          placeholder="Write Your Review"
          onChangeText={(value) => setUserInput(value)}
          numberOfLines={4}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: "gray",
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity
          disabled={!userInput}
          onPress={() => onsubmit()}
          style={{
            backgroundColor: Colors.Primary,
            padding: 5,
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "outfit",
              color: "white",

              textAlign: "center",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      {/* Display prevoius Reviews */}

      <View>
        {business?.reviews?.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 10,
                // alignItems: "center",
                padding: 20,
                borderWidth: 0.5,
                borderColor: "gray",
                marginTop: 10,
                borderRadius: 10,
              }}
            >
              <Image
                source={{ uri: item.userImage }}
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 99,
                }}
              />
              <View
                style={{
                  display: "flex",
                  gap: 5,
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-medium",
                  }}
                >
                  {item.userName}
                </Text>
                <Rating
                  imageSize={20}
                  ratingCount={item.rating}
                  style={{
                    alignItems: "flex-start",
                  }}
                />
                <Text>{item.comment}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Reviews;
