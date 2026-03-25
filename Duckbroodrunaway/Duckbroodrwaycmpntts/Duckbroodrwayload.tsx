// WelcomeLoader.tsx

import WebView from 'react-native-webview';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated} from 'react-native';

const av = new Animated.Value(0);
av.addListener(() => {
  return;
});

const volcLertLoaderHTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: transparent;
          }

          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .bubble {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            background-image: linear-gradient(to right, #ff6b81, #ff9a44);
            margin: 0 5px;
            animation: bubbleAnimation 1.5s ease-in-out infinite;
          }

          .bubble:nth-child(2) {
            animation-delay: 0.2s;
          }

          .bubble:nth-child(3) {
            animation-delay: 0.4s;
          }

          @keyframes bubbleAnimation {
            0%, 100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(2);
              opacity: 0.5;
            }
          }
        </style>
      </head>
      <body>
        <div class="loader">
          <div class="bubble"></div>
          <div class="bubble"></div>
          <div class="bubble"></div>
        </div>
      </body>
    </html>
`;

const Duckbroodrwayload = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const volcLertTimer = setTimeout(() => {
      navigation.replace('Duckbroodrwayonb' as never);
    }, 6000);

    return () => clearTimeout(volcLertTimer);
  }, [navigation]);

  return (
    <ImageBackground
      source={require('../../elements/images/duckbroodldrbg.png')}
      style={styles.volcLertImageBackground}
      resizeMode="cover">
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.volcLertWebviewDock}>
          <WebView
            originWhitelist={['*']}
            source={{html: volcLertLoaderHTML}}
            style={styles.volcLertWebview}
            scrollEnabled={false}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default Duckbroodrwayload;

const styles = StyleSheet.create({
  volcLertImageBackground: {
    flex: 1,
  },
  volcLertWebviewDock: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  volcLertWebview: {
    backgroundColor: 'transparent',
    width: 261,
    height: 250,
  },
});
