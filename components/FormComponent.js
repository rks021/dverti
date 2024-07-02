import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

const FormComponent = () => {
  const [name, setName] = useState("");
  const [idade, setIdade] = useState("");
  const [sobrenome, setSobrenome] = useState("");


  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome"
        value={name}
        onChangeText={setName}
      />
      <Text style={styles.text}>Olá, {name}!</Text>
    
      <TextInput
      style={styles.input}
      placeholder="Digite sua idade"
      value={idade}
      onChangeText={setIdade}
    />
    <Text style={styles.text}>Olá, {name}, {idade}!</Text>
    
    <Text style={styles.text}>Olá, {name}!</Text>
      <TextInput
      style={styles.input}
      placeholder="Digite seu sobrenome"
      value={sobrenome}
      onChangeText={setSobrenome}
    />
    <Text style={styles.text}>Olá, {name}, {sobrenome}, {idade}!</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});

export default FormComponent;
