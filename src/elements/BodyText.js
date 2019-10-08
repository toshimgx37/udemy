import React from "react";
import {View,Text,StyleSheet} from "react-native";

class BodyText extends React.Component {
  render() {
    return(
      <View>
        <Text style={styles.text}>
           {this.props.children}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "red",
    backgroundColor: "aqua",
  },
});

export default BodyText;
