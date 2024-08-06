import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import useWarmUpBrowser from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (error) {
      console.error("OAuth error", err);
    }
  }, [startOAuthFlow]);

  return (
    <View
      style={{
        padding: 50,
      }}
    >
      <View>
        <Text style={{ fontSize: 30 }}>LoginScreen</Text>
        <Image source={require("../assets/images/favicon.png")} />
      </View>
      <View>
        <Text
          style={{
            fontSize: 30,
            fontFamily: "outfit-medium",
            textAlign: "center",
          }}
        >
          Your altimate
          <Text style={{ color: Colors.Primary }}>Community Business Book</Text>
          App
        </Text>
        <Text
          style={{
            textAlign: "center",
            marginVertical: 15,
          }}
        >
          Your favourite busines near you
        </Text>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
          <Text
            style={{
              textAlign: "center",
              color: "#fff",
              fontFamily: "outfit",
            }}
          >
            Lets Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.Primary,
    padding: 10,
    borderRadius: 99,
  },
});

export default LoginScreen;
