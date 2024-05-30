import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const navigate = useNavigation()
  return (
    <View>
      <Image
        style={{ height: 370, width: "100%", resizeMode: "contain" }}
        source={{
          uri: "https://thumbs.dreamstime.com/b/its-quiz-time-text-wooden-cubes-177037660.jpg",
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{
            textAlign: "center",
            color: "magenta",
            fontSize: 20,
            fontWeight: "600",
          }}
        >
          QUIZ RULES
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: "#F88379",
            borderRadius: 6,
            marginTop: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>*</Text>
            <Text
              style={{
                marginLeft: 8,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              For each correct answer you get 10 points
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>*</Text>
            <Text
              style={{
                marginLeft: 8,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              There is no negative marking for wrong answers
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>*</Text>
            <Text
              style={{
                marginLeft: 8,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Each question has a time limits of 15sec
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>*</Text>
            <Text
              style={{
                marginLeft: 8,
                color: "#722F37",
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              You should answer all questions compulsarily
            </Text>
          </View>
        </View>
      </View>
      <Pressable
      onPress={()=>navigate.navigate("Quiz")}
        style={{
          backgroundColor: "magenta",
          padding: 14,
          width:120,
          borderRadius:25,
          borderRadius: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 30
        }}
      >
        <Text style={{ color: "#FFF", fontWeight: "600", textAlign: "center" }}>
          Start Quiz
        </Text>
      </Pressable>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
