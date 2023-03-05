import 'react-native/tvos-types.d';
import React, {useRef} from 'react';
import VideoPlayer from 'react-native-media-console';
import Video from 'react-native-video';

const App = () => {
  const videoRef = useRef<Video>(null);
  const onEnd = () => videoRef?.current?.seek(0); // https://github.com/react-native-video/react-native-video/issues/836#issuecomment-341381704

  return (
    <VideoPlayer
      videoRef={videoRef}
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      onEnd={onEnd}
    />
  );
};

export default App;
