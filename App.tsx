import React from 'react';
//import {Text, View} from 'react-native';
import Home from './src/screen/Home';
import Splash from './src/screen/Splash';

export default function App(): JSX.Element {
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  return isLoading ? <Splash setIsLoading={setIsLoading} /> : <Home />;
}
