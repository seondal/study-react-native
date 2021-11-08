import React from "react";
import { View, Text } from "react-native";
import { viewStyles, textStyles } from "./styles";
import { Header, Contents, Footer } from "./components/Layout";
import ShadowBox from "./components/ShadowBox";
import Button from "./components/Button";
import Input from "./components/Input";

const App = () => {
  return (
    <View style={viewStyles.container}>
      <Header />
      <ShadowBox />
      <Button title="Seondal" />
      <Button title="React Native" />
      <Input borderColor="#3498db" />
      <Input borderColor="#9b59b6" />
      <Contents />
      <Footer />
    </View>
  );
};

export default App;
