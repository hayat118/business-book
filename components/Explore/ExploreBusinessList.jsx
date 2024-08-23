import { View, Text, FlatList } from "react-native";
import React from "react";
import BusinessListCard from "./BusinessListCard";
import { ScrollView } from "react-native-virtualized-view";

const ExploreBusinessList = ({ businessList }) => {
  return (
    <ScrollView>
      {businessList?.length > 0 ? (
        <FlatList
          data={businessList}
          renderItem={({ item, index }) => (
            <View key={index}>
              <BusinessListCard business={item} />
            </View>
          )}
        />
      ) : (
        <View>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 25,
              textAlign: "center",
              marginTop: 100,
            }}
          >
            No Business Added!
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

export default ExploreBusinessList;
