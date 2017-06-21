import React, { Component } from "react";
import { View, Image, Text, ListView, TouchableHighlight } from "react-native";
import { connect } from "react-redux";

const ds = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2
});

class MainScreen extends Component {
  constructor() {
    super();

    this.state = {
      data: ds.cloneWithRows([])
    };
  }

  componentWillMount() {
    fetch("https://api.github.com/search/repositories?q=topic:react%20native")
      .then(resp => resp.json())
      .then(json => {
        this.setState({
          data: this.state.data.cloneWithRows(json.items)
        });
      });
  }

  renderRow(rowData) {
    console.log(rowData);
    return (
      <TouchableHighlight>
        <View style={{ flexDirection: "row", flex: 1, marginBottom: 5 }}>
          <View style={{ flex: 1 }}>
            <Image
              source={{ uri: rowData.owner.avatar_url }}
              style={{ width: 50, height: 50 }}
            />
          </View>
          <Text
            style={{ flex: 5 }}
          >{`${rowData.name} write in ${rowData.language}`}</Text>
        </View>
      </TouchableHighlight>
    );
  }

  render() {
    return (
      <ListView
        dataSource={this.state.data}
        renderRow={this.renderRow.bind(this)}
        enableEmptySections
      />
    );
  }
}

export default MainScreen;
