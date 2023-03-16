import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListScreen from './ListScreen';
import FormScreen from './FormScreen';

const Stack = createStackNavigator();

export default function Root() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={ListScreen} />
            <Stack.Screen name="Form" component={FormScreen} />
        </Stack.Navigator>
    );
}
