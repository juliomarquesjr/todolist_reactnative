import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import Home from './src/components/Home';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Home />
    </SafeAreaView>
  );
};
export default App;
