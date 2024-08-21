import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Rating } from "react-native-ratings";
import { Colors } from "../../constants/Colors";

const Reviews = ({ business }) => {
  const [rating, setrating] = useState(4);
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
          numberOfLines={4}
          style={{
            borderWidth: 1,
            padding: 10,
            borderRadius: 10,
            borderColor: "gray",
            textAlignVertical: "top",
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              backgroundColor: Colors.Primary,
              padding: 5,
              borderRadius: 10,
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Reviews;
