import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../Views/Home'
import ChooseType from '../Views/ChooseType'
import UploadImage from '../Views/UploadImage'
import Result from '../Views/Result'

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName='Home'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ChooseType' component={ChooseType} />
        <Stack.Screen name='UploadImage' component={UploadImage} />
        <Stack.Screen name='Result' component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
