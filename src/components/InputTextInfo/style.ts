import { StyleSheet } from "react-native";
import { Theme } from "../../styles/themes/light";

export const InputStyles = StyleSheet.create({
  Container: {
    width: '100%',

    marginBottom: 30,
  },
  Text: {
    paddingLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: Theme.colors.textColor,
  },
  Input: {
    backgroundColor: Theme.colors.inputColor,
    height: 45,

    marginTop: 15,
    paddingLeft: 10,
    borderRadius: 15,
  }
})