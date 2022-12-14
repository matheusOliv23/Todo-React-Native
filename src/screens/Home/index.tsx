import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  FlatList,
} from "react-native";
import { clipboard, logo } from "../../../assets";
import { TaskItem } from "../../components/TaskItem";
import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [taskName, setTaskName] = useState("");
  const [completedTasksNumber, setCompletedTasksNumber] = useState(0);

  function handleTaskAdd() {
    if (tasks.includes(taskName)) {
      return Alert.alert(
        "Tarefa já existe",
        "Ja existe uma tarefa na lista com esse nome"
      );
    }
    setTasks((prevState) => [...prevState, taskName]);
    setTaskName("");
  }
  function handleTaskRemove(name: string) {
    Alert.alert("Remover", `Remover essa tarefa?`, [
      {
        text: "Sim",
        onPress: () => {
          setTasks((prevState) => prevState.filter((task) => task !== name));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
    console.log(`Clicou em remover ${name}`);
  }

  const renderItem = ({ item }: { item: string }) => {
    return (
      <TaskItem
        completedTaskNumber={completedTasksNumber}
        setCompletedTaskNumber={setCompletedTasksNumber}
        onRemove={() => handleTaskRemove(item)}
        task={item}
      />
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={styles.listEmptyContainer}>
        <Image source={clipboard} />
        <Text style={styles.listEmptyText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.listEmptyText}>
          Crie tarefas e organize seus itens aqui
        </Text>
      </View>
    );
  };
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
          onChangeText={(task) => setTaskName(task)}
          value={taskName}
        />
        <TouchableOpacity onPress={handleTaskAdd} style={styles.button}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createdContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
          <Text style={styles.createdText}>Criadas</Text>
          <View style={styles.quantity}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {tasks.length}
            </Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.completedText}>Concluidas</Text>
          <View style={styles.quantity}>
            <Text style={{ color: "#fff", fontWeight: "bold" }}>
              {completedTasksNumber}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ padding: 16 }}>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={renderItem}
          ListEmptyComponent={listEmptyComponent}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}
