import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import WebView from 'react-native-webview';

// import { Container } from './styles';

const Web: React.FC = () => {
  const route = useRoute();
  const { link } = route.params;
  const navigation = useNavigation();
  console.tron.log('link', link);

  useEffect(() => {
    // navigation.setOptions({
    //   enableNavigation: true,
    // });
  }, [navigation]);

  return <WebView source={{ uri: link }} />;
};

export default Web;
