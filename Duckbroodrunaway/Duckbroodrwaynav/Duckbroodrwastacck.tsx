import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Duckbroodrwayload from '../Duckbroodrwaycmpntts/Duckbroodrwayload';
import Duckbroodrwayonb from '../Duckbroodrwayscrns/Duckbroodrwayonb';
import Duckbroodrwahome from '../Duckbroodrwayscrns/Duckbroodrwahome';
import Duckbroodrwagams from '../Duckbroodrwayscrns/Duckbroodrwagams';
import Duckbroodrwashp from '../Duckbroodrwayscrns/Duckbroodrwashp';
import Duckbroodrwashpdet from '../Duckbroodrwayscrns/Duckbroodrwashpdet';
import Duckbroodrwafactgen from '../Duckbroodrwayscrns/Duckbroodrwafactgen';
import Duckbroodrwastrs from '../Duckbroodrwayscrns/Duckbroodrwastrs';
import Duckbroodrwastrsdet from '../Duckbroodrwayscrns/Duckbroodrwastrsdet';
import Duckbroodrwapzzl from '../Duckbroodrwayscrns/Duckbroodrwapzzl';
import Duckbroodrwapzzldet from '../Duckbroodrwayscrns/Duckbroodrwapzzldet';
import Duckbroodrsettgs from '../Duckbroodrwayscrns/Duckbroodrsettgs';

const NativeStack = createStackNavigator();

const Duckbroodrwastacck: React.FC = () => {
  return (
    <NativeStack.Navigator screenOptions={{headerShown: false}}>
      <NativeStack.Screen
        name="Duckbroodrwayload"
        component={Duckbroodrwayload}
      />
      <NativeStack.Screen
        name="Duckbroodrwayonb"
        component={Duckbroodrwayonb}
      />
      <NativeStack.Screen
        name="Duckbroodrwahome"
        component={Duckbroodrwahome}
      />
      <NativeStack.Screen
        name="Duckbroodrwagams"
        component={Duckbroodrwagams}
      />
      <NativeStack.Screen name="Duckbroodrwashp" component={Duckbroodrwashp} />
      <NativeStack.Screen
        name="Duckbroodrwashpdet"
        component={Duckbroodrwashpdet}
      />
      <NativeStack.Screen
        name="Duckbroodrwafactgen"
        component={Duckbroodrwafactgen}
      />
      <NativeStack.Screen
        name="Duckbroodrwastrs"
        component={Duckbroodrwastrs}
      />
      <NativeStack.Screen
        name="Duckbroodrwastrsdet"
        component={Duckbroodrwastrsdet}
      />
      <NativeStack.Screen
        name="Duckbroodrwapzzl"
        component={Duckbroodrwapzzl}
      />
      <NativeStack.Screen
        name="Duckbroodrwapzzldet"
        component={Duckbroodrwapzzldet}
      />
      <NativeStack.Screen
        name="Duckbroodrsettgs"
        component={Duckbroodrsettgs}
      />
    </NativeStack.Navigator>
  );
};

export default Duckbroodrwastacck;
