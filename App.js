import {createAppContainer} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import firebase from "firebase";
import "firebase/firestore";

import MemoListScreen from "./src/screens/MemoListScreen";
import MemoDetailScreen from "./src/screens/MemoDetailScreen";
import MemoEditScreen from "./src/screens/MemoEditScreen";
import LoginScreen from "./src/screens/LoginScreen";
import SignupScreen from "./src/screens/SignupScreen";
import MemoCreateScreen from "./src/screens/MemoCreateScreen";

import ENV from "./env.json";

const firebaseConfig = {
apiKey:            ENV.FIREBASE_API_KEY,
authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
databaseURL:       ENV.FIREBASE_DB_URL,
projectId:         ENV.FIREBASE_PRJ_ID,
storageBucket:     ENV.FIREBASE_STORAGE,
messagingSenderId: ENV.FIREBASE_SENDER_ID,
appId:             ENV.FIREBASE_APP_ID,
measurementId:     ENV.FIREBASE_MEASUREMENT,
};

firebase.initializeApp(firebaseConfig);

const MainNavigator = createStackNavigator({
  Login: {screen: LoginScreen},
  Signup: {screen: SignupScreen},
  Home: {screen: MemoListScreen},
  MemoDetail: {screen: MemoDetailScreen},
  MemoEdit: {screen: MemoEditScreen},
  MemoCreate: {screen: MemoCreateScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
