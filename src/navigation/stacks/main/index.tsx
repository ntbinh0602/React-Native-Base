import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from 'features/home/screen';
import SettingScreen from 'features/settings/screen';

import { translate } from 'localization/hooks';

export enum MainStackScreens {
  'Home' = 'Home',
  'Settings' = 'Settings',
}

export type MainStackParamList = {
  [MainStackScreens.Home]: undefined;
  [MainStackScreens.Settings]: undefined;
};

// const Stack = createNativeStackNavigator<MainStackParamList>();
const Drawer = createDrawerNavigator<MainStackParamList>();
const MainStack = () => {
  return (
    // <Stack.Navigator>
    //   <Stack.Screen name={MainStackScreens.Home} component={HomeScreen} />
    //   <Stack.Screen
    //     name={MainStackScreens.Settings}
    //     component={SettingScreen}
    //     options={{ title: translate('screen.settings.title') }}
    //   />
    // </Stack.Navigator>
    <Drawer.Navigator>
      <Drawer.Screen name={MainStackScreens.Home} component={HomeScreen} />
      <Drawer.Screen
        name={MainStackScreens.Settings}
        component={SettingScreen}
        options={{ title: translate('screen.settings.title') }}
      />
    </Drawer.Navigator>
  );
};

export default MainStack;
