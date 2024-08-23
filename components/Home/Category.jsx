import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../../constants/Colors";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "../../configs/FirebaseConfig";
import CategoryItem from "./CategoryItem";
import { useRouter } from "expo-router";

const Category = ({ explore = false, onCategorySelect }) => {
  const [categoryList, setCategoryList] = useState([]);

  const router = useRouter();

  useEffect(() => {
    GetCategoryList();
  }, []);

  //

  const GetCategoryList = async () => {
    setCategoryList([]);
    try {
      const q = query(collection(db, "Category"));
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        setCategoryList((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      console.error(error);
    }
  };
  //
  const onCategoryPressHandler = (item) => {
    if (!explore) {
      router.push("/businesslist/" + item.name);
    } else {
      onCategorySelect(item.name);
    }
  };

  return (
    <View>
      {!explore && (
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
            Category
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
      )}
      <FlatList
        data={categoryList}
        horizontal={true}
        renderItem={({ item, index }) => (
          <CategoryItem
            category={item}
            key={index}
            onCategoryPress={(category) =>
              // router.push("/businesslist/" + item.name)
              onCategoryPressHandler(item)
            }
          />
        )}
      />
    </View>
  );
};

export default Category;
