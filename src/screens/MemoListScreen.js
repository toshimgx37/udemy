
import React from "react";
import {View, StyleSheet} from "react-native";
import MemoList from "../components/MemoList";
import CircleButton from "../elements/CircleButton";
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import firebase from "firebase";

class MemoListScreen extends React.Component {
//メモの情報を渡す前に、stateで管理する。
  state = {
    memoList: [],
  }

  //画面が表示される前に行われる
  componentWillMount() {
     const {currentUser} = firebase.auth();
     const db = firebase.firestore()
     db.collection(`users/${currentUser.uid}/memos`)
        .onSnapshot((snapshot) => {
          const memoList = [];
          //データベースから、メモリストにあるメモを一つずつ表示する
            snapshot.forEach((doc) => {
            memoList.push({...doc.data(), key: doc.id});
          });
          this.setState({memoList});
      });
    }

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
    this.props.navigation.navigate("MemoCreate");
  }

  render() {
    return(
      <View style={styles.container}>
        <MemoList memoList={this.state.memoList} navigation={this.props.navigation} />
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
