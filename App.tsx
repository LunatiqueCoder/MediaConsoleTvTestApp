import 'react-native/tvos-types.d';
import React from 'react';
import VideoPlayer from 'react-native-media-console';

const App = () => {
  return <VideoPlayer source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}} />;
};

export default App;
