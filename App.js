import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";

const MainNavigator = createStackNavigator({
  Home: {screen: MemoListScreen},
  MemoDetail: {screen: MemoDetailScreen},
  MemoEdit: {screen: MemoEditScreen},
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},

});

const App = createAppContainer(MainNavigator);

export default App;
