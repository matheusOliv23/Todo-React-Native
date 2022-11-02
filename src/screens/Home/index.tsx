import React from "react";
import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import { logo } from "../../../assets";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#6b6b6b"
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createdContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Text style={styles.createdText}>Criadas</Text>
          <View style={styles.quantity}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>1</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.completedText}>Concluidas</Text>
          <View style={styles.quantity}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>1</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
