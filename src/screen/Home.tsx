import {SafeAreaView, Text} from 'react-native';
import Animated, {FadeIn} from 'react-native-reanimated';

export default function Home(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#F6AD76'}}>
      <Animated.ScrollView entering={FadeIn.duration(500)}>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
          }}>
          Welcome
        </Text>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
