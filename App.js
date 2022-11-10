import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    WeatherAlerts: ComponentsScreen,
    List: ListScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Test App",
    },
  }
);

export default createAppContainer(navigator);
