import React from "react";
import { Text, View, Button } from "react-native";
// import MyButton from "./MyButton";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ fontSize: 30, marginBottom: 10 }}>
        Core Button Component
      </Text>
      <Button title="button" onPress={() => alert("Click !!!")} />
      <Text />
      <Text style={{ fontSize: 30, marginBottom: 10 }}>
        Custom Button Component
      </Text>
      {/* <MyButton /> */}
    </View>
  );
};

export default App;
