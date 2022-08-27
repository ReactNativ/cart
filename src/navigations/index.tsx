import React from "react";
import StackNavigator from "./stackNavigator";
import { Provider } from "react-redux";
import store from "../redux/store";

const App = () => {
    return (
        <Provider store={store}>
            <StackNavigator />
        </Provider>
    );
};

export default App;