import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Video, ResizeMode } from 'expo-av';

export default function EditScreen({navigation}) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={{position: "relative"}}>
      <Video
        ref={video}
        style={styles.backgroundVideo}
        source={{
          uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
        }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundVideo: {
    height: 200,
    width: 400,
  },
});
