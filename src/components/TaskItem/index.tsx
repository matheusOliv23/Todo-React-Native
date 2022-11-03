import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export function TaskItem() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
      ]}
    >
      <MaterialIcons
        name={isChecked ? "check-circle" : "radio-button-unchecked"}
        size={24}
        color="#2FC7E5"
        onPress={() => setIsChecked(!isChecked)}
      />
      <Text
        style={[
          styles.text,
          { textDecorationLine: isChecked ? "line-through" : "none" },
        ]}
      >
        Texto aqui
      </Text>
      <MaterialIcons name="delete" size={24} color="#e23c44" />
    </View>
  );
}
