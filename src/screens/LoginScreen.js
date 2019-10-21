import React from "react";
import {StyleSheet, View, Text, TextInput, TouchableHighlight } from "react-native";
import firebase from "firebase";

class LoginScreen extends React.Component {
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

  state = {
    email: "toshihiro@example.com",
    password: "password",
  }

  handleSubmit = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  render() {
    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Login
        </Text>
          <TextInput
            style={styles.input}
            value={this.state.email}
            onChangeText={(text) => {this.setState({email: text}); }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Email Adrress"
          />
          <TextInput
            style={styles.input}
            value={this.state.password}
            onChangeText={(text) => {this.setState({password: text}); }}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Password"
            secureTextEntry
          />
          <TouchableHighlight style={styles.button} onPress={() => this.handleSubmit()} >
            <Text style={styles.buttonTitle}>Login</Text>
          </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 24,
    backgroundColor: "#fff",
  },

  input: {
    backgroundColor: "#eee",
    height: 48,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#DDD",
    padding: 8,
  },

  title: {
    fontSize: 28,
    alignSelf: "center",
    marginBottom: 24,
  },

  button: {
    backgroundColor: "#E31676",
    height: 48,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    width: "70%",
    alignSelf: "center",
  },

  buttonTitle: {
    color: "#fff",
    fontSize: 18,
  },
});

export default LoginScreen;
