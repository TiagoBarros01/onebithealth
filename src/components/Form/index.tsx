import React, { useContext } from "react";
import { Text, TouchableOpacity } from "react-native";
import { IMCContext } from "../../contexts/IMCContext";
import { HomeStyles } from "../../styles/screens/Home";
import { InputTextInfo } from "../InputTextInfo";
import { FormStyles } from "./style";

export function Form() {
  const { handleIMC, handleIMCAgain, TexBtn, btnState } =
  useContext(IMCContext);

  return (
    <>
      <InputTextInfo />
      <TouchableOpacity
        onPress={btnState === true ? () => handleIMC() : () => handleIMCAgain()}
        style={HomeStyles.Button}
        activeOpacity={0.6}
      >
        <Text style={HomeStyles.TextBtn}>{TexBtn}</Text>
      </TouchableOpacity>
      <Text style={FormStyles.TextWithoutResult}>
        Fill the height and weight fields
      </Text>
    </>
  );
}
