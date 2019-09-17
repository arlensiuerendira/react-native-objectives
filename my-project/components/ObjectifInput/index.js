import React from "react";
import styles from "./styles";
import { View, TextInput, Button } from "react-native";

const ObjectifInput = props => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="RENTREZ VOTRE OBJECTIF"
        value={props.objectif}
        onChangeText={props.changeText}
      />
      <Button title="ADD" onPress={props.onClickAdd} />
    </View>
  );
};

export default ObjectifInput;
