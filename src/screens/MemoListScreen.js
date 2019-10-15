// import React from "react";
// import {StyleSheet, View} from "react-native";
// import MemoList from "../components/MemoList";
// import CircleButton from "../elements/CircleButton";
//
// class MemoListScreen extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <MemoList />
//         <CircleButton name='plus' />
//       </View>
//     );
//   }
// }
//
// const styles = StyleSheet.create ({
//   container: {
//     flex: 1,
//     width: "100%",
//   },
// });
//
// export default MemoListScreen;


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
    headerTitleStyle: {
      color: "#fff",
    },

  };
  render() {
    return(
      <View style={styles.container}>
        <MemoList navigation={this.props.navigation} />
          <CircleButton name="plus" onPress={() => {this.props.navigation.navigate("MemoEdit"); }} />
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
