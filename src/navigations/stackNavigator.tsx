import React from "react";
import CartScreen from '../screens/cart';
import { Strings } from "../utils/Strings";
import { useAppSelector } from "../redux/hooks";
import ProductsScreen from '../screens/products';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Colors } from "react-native/Libraries/NewAppScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function TabView() {

  const { totalquantity } = useAppSelector(state => state.cartReducer);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerTitleAlign: 'center',
        tabBarIcon: ({ focused, color }) => {
          let iconName = '';
          if (route.name === Strings.home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === Strings.cart) {
            iconName = focused ? 'md-cart' : 'md-cart-outline';
          }
          return <Ionicons name={iconName} size={23} color={color} />;
        },
        tabBarHideOnKeyboard: true
      })}
    >

      <Tab.Screen name={Strings.home} component={ProductsScreen} />
      <Tab.Screen name={Strings.cart} component={CartScreen}
        options={{
          tabBarBadge: (totalquantity),
          tabBarBadgeStyle: { backgroundColor: Colors.primary, color: Colors.white, marginLeft: 5, marginBottom: 3 }
        }}
      />
    </Tab.Navigator>
  )
}

const StackNavigator = () => {

  return (
    <NavigationContainer >
      <TabView />
    </NavigationContainer>)
}

export default StackNavigator;
