import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
  },
  logoContainer: {
    width: "100%",
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    height: 173,
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
  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1f1e25",
    color: "#fff",
    padding: 16,
    fontSize: 16,
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
  },
  listEmptyText: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
  },
});
