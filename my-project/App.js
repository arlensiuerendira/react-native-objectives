import React from "react";
import { Text, View, TextInput, Button, FlatList } from "react-native";
import styles from "./styles";
import ObjectifInput from "./components/ObjectifInput";
import ObjectifItem from "./components/ObjectifItem";

class App extends React.Component {
  state = {
    objectif: "",
    ListeObjectifs: []
  };

  changeText = text => {
    this.setState({ objectif: text });
  };

  onClickAdd = () => {
    if (this.state.objectif !== "") {
      this.setState({
        ListeObjectifs: [
          ...this.state.ListeObjectifs,
          { key: Math.random().toString(), value: this.state.objectif }
        ]
      });
      this.setState({ objectif: "" });
    }
  };

  onClickDelete = id => {
    this.setState({
      ListeObjectifs: this.state.ListeObjectifs.filter(objectif => {
        return objectif.key !== id;
      })
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ObjectifInput
          objectif={this.state.objectif}
          changeText={this.changeText}
          onClickAdd={this.onClickAdd}
        />
        <FlatList
          data={this.state.ListeObjectifs}
          renderItem={itemData => (
            <ObjectifItem
              onDelete={() => this.onClickDelete(itemData.item.key)}
              onDelete={this.onClickDelete}
              value={itemData.item.value}
            />
          )}
        />
        {/*<ScrollView>
          {this.state.ListeObjectifs.map((objectif, index) => (
            <View
              key={index}
              style={{
                backgroundColor: "grey",
                justifyContent: "center",
                marginHorizontal: 30,
                marginVertical: 10,
                padding: 10
              }}
            >
              <Text>{objectif}</Text>
            </View>
          ))}
            </ScrollView>*/}
      </View>
    );
  }
}

export default App;
