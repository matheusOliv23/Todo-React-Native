import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#272727",
  },
  logoContainer: {
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: 173,
  },
  createdContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginTop: 35,
  },
  createdText: {
    color: "#2FC7E5",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  completedText: {
    color: "#6C6DB0",
    fontSize: 16,
    fontWeight: "bold",
    marginRight: 5,
  },
  eventName: {
    color: "#fdfcfe",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48,
  },
  eventDate: {
    color: "#6b6b6b",
    fontSize: 16,
  },
  quantity: {
    backgroundColor: "gray",
    width: 20,
    height: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: 16,
    fontSize: 17,
    marginRight: 7,
  },
  buttonText: {
    color: "#fff",
    fontSize: 35,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    flexDirection: "row",
    width: "100%",
    marginTop: 36,
    marginBottom: 42,
    padding: 15,
    position: "absolute",
    top: 90,
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
