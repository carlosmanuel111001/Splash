import React, {SetStateAction, Dispatch} from 'react';
import {SafeAreaView, Text} from 'react-native';
import LottieView from 'lottie-react-native';

interface SplashProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export default function Splash({setIsLoading}: SplashProps): JSX.Element {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        margin: 0,
      }}>
      <LottieView
        source={require('../assets/gymSplash.json')}
        autoPlay
        loop={false}
        resizeMode="cover"
        onAnimationFinish={() => setIsLoading(false)}
      />
      <Text>Dev: Alvaro && Carlos</Text>
    </SafeAreaView>
  );
}
