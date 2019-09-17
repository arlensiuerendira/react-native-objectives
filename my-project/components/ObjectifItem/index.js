import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

const ObjectifItem = props => {
  return (
    <TouchableOpacity activeOpacity={0.3} onPress={props.onDelete}>
      <View
        style={{
          backgroundColor: "grey",
          justifyContent: "center",
          marginHorizontal: 30,
          marginVertical: 10,
          padding: 10
        }}
      >
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ObjectifItem;
