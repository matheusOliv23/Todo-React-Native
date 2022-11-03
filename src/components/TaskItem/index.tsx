import { View, Text } from "react-native";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  onRemove: () => void;
  task: string;
};

export function TaskItem({ onRemove, task }: Props) {
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
        {task}
      </Text>
      <MaterialIcons
        onPress={onRemove}
        name="delete"
        size={24}
        color="#e23c44"
      />
    </View>
  );
}
