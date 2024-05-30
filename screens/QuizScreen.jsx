import { StyleSheet, Text, SafeAreaView, View, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import Questions from "../data/Questions";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
const QuizScreen = () => {
  const [points, setPoints] = useState(0);
  const [index, setIndex] = useState(0);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [answer, setAnswer] = useState([]);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [counter, setCounter] = useState(15);
  const navigate = useNavigation();
  let inetrval = null;
  
  useEffect(() => {
    if (selectedAnswerIndex !== null) {
      if (selectedAnswerIndex === currentQuestion?.correctAnswerIndex) {
        setPoints(() => points + 10);
        setAnswerStatus(true)
        answer.push({ question: index + 1, answer: true });
      } else {
        setAnswerStatus(false);
        answer.push({ question: index + 1, answer: false });
      }
    }
  }, [selectedAnswerIndex]);

  useEffect(() => {
    setSelectedAnswerIndex(null);
    setAnswerStatus(null);
  }, [index]);

  useEffect(() => {
    const myInterval = () => {
      if (counter >= 1) {
        setCounter((counter) => counter - 1);
      }
      if (counter === 0) {
        setIndex(index + 1);
        setCounter(15);
      }
    };
    inetrval = setTimeout(myInterval, 1000);

    return () => {
      clearTimeout(inetrval);
    };
  }, [counter]);

  useEffect(() => {
    if (index + 1 > data.length) {
      navigate.navigate("Results", {
        answer: answer,
        points: points,
      });
    }
  }, [currentQuestion]);

  useEffect(() => {
    if (!inetrval) {
      setCounter(15);
    }
  }, [index]);
  const data = Questions;
  const totalQuestions = data.length;
  const currentQuestion = data[index];
  // console.log(currentQuestion);
  const progressPercentage = Math.floor((index/totalQuestions)*100);
  // console.log(progressPercentage)
  return (
    <SafeAreaView style={{ paddingTop: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>Quiz Challenge</Text>
        <Pressable
          style={{ padding: 10, backgroundColor: "magenta", borderRadius: 20 }}
        >
          <Text
            style={{ color: "#FFF", textAlign: "center", fontWeight: "bold" }}
          >
            {counter}
          </Text>
        </Pressable>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 10,
        }}
      >
        <Text>Your Progress</Text>
        <Text>
          ({index}/{totalQuestions})Questions answered
        </Text>
      </View>

      {/* Progress Bar */}

      <View
        style={{
          backgroundColor: "white",
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          height: 10,
          borderRadius: 20,
          justifyContent: "center",
          marginTop: 20,
          marginLeft: 10,
        }}
      >
        <Text
          style={{
            backgroundColor: "#FFC0CB",
            borderRadius: 12,
            position: "absolute",
            left: 0,
            height: 10,
            right: 0,
            width: `${progressPercentage}%`,
            marginTop: 10,
          }}
        ></Text>
      </View>

      <View
        style={{
          backgroundColor: "#F0F8FF",
          marginTop: 30,
          padding: 10,
          borderRadius: 6,
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          {currentQuestion?.question}
        </Text>

        <View style={{ marginTop: 12 }}>
          {currentQuestion?.options.map((items, index) => (
            <Pressable
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(index)
              }
              key={items.id}
              style={
                selectedAnswerIndex === index &&
                index === currentQuestion.correctAnswerIndex
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      backgroundColor: "green",
                      marginVertical: 15,
                      borderRadius: 20,
                    }
                  : selectedAnswerIndex !== null &&
                    selectedAnswerIndex === index
                  ? {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      backgroundColor: "red",
                      marginVertical: 15,
                      borderRadius: 20,
                    }
                  : {
                      flexDirection: "row",
                      alignItems: "center",
                      borderWidth: 0.5,
                      borderColor: "#00FFFF",
                      marginVertical: 15,
                      borderRadius: 20,
                    }
              }
            >
              {selectedAnswerIndex === index &&
              index === currentQuestion?.correctAnswerIndex ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="checkcircle"
                  size={20}
                  color="white"
                />
              ) : selectedAnswerIndex != null &&
                selectedAnswerIndex === index ? (
                <AntDesign
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                  name="closecircle"
                  size={20}
                  color="white"
                />
              ) : (
                <Text
                  style={{
                    borderColor: "#00FFFF",
                    textAlign: "center",
                    borderWidth: 0.5,
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    padding: 10,
                  }}
                >
                  {items.options}
                </Text>
              )}
              <Text style={{ marginLeft: 10 }}>{items.answer}</Text>
            </Pressable>
          ))}
        </View>
      </View>
      <View
        style={
          answerStatus === null
            ? null
            : {
                marginTop: 45,
                backgroundColor: "#F0F8FF",
                padding: 10,
                borderRadius: 7,
                height: 120,
              }
        }
      >
        {answerStatus === null ? null : (
          <Text
            style={
              answerStatus == null
                ? null
                : { fontSize: 17, textAlign: "center", fontWeight: "bold" }
            }
          >
            {!!answerStatus ? "Correct Answer" : "Wrong Answer"}
          </Text>
        )}
        {index + 1 >= Questions.length && answerStatus !== null ? (
          <Pressable
            onPress={() =>
              navigate.navigate("Results", {
                points: points,
                answer: answer,
              })
            }
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>Done</Text>
          </Pressable>
        ) : answerStatus === null ? null : (
          <Pressable
            onPress={() => setIndex(index + 1)}
            style={{
              backgroundColor: "green",
              padding: 10,
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: 20,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#FFF" }}>Next Questions</Text>
          </Pressable>
        )}
      </View>
    </SafeAreaView>
  );
};

export default QuizScreen;

const styles = StyleSheet.create({});
