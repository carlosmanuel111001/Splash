import {View, StyleSheet, Button, Linking} from 'react-native';
import {Fragment, useState} from 'react';
import LottieView from 'lottie-react-native';

export interface lottieContainersProps {
  name: string;
  source: string;
  author: string;
  path: string;
}

export default function LottieContainers({
  name,
  source,
  author,
  path,
}: lottieContainersProps): JSX.Element {
  const [show, setShow] = useState<boolean>(true);
  return (
    <Fragment>
      <View style={styles.lottieContainers}>
        {show && (
          <LottieView
            source={path}
            autoPlay
            loop={false}
            resizeMode="contain"
            onAnimationFinish={() => setTimeout(() => setShow(false), 1000)}
          />
        )}
      </View>
      <Button
        title={`Play ${name} by ${author}`}
        onPress={() => setShow(true)}
      />
      <Button
        title="Go to website"
        onPress={async () => await Linking.openURL(source)}
      />
    </Fragment>
  );
}
const styles = StyleSheet.create({
  lottieContainers: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
});
