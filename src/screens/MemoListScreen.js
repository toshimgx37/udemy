
import React from "react";
import {View, StyleSheet} from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

class MemoListScreen extends React.Component {
  static navigationOptions = {
    title: "Memot",
    headerStyle: {
      backgroundColor: "#265366",
    },
    headerTintColor: "#fff",
    headerBackTitle: null,
    headerTitleStyle: {
      color: "#fff",
    },

  };

  handlePress() {
    const {params} = this.props.navigation.state;
    this.props.navigation.navigate("MemoCreate", {currentUser: params.currentUser});
  }

  render() {
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
          <CircleButton name="plus" onPress={this.handlePress.bind(this)} />
        </View>
    );
  }
}

const styles = StyleSheet.create ({
   container: {
     flex: 1,
     width: "100%",
   },
 });

export default MemoListScreen;
