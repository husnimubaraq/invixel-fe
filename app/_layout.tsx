import { useFonts } from 'expo-font';
import { Slot, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import "expo-router/entry"

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

import "@/global.css"
import { ScrollView, StatusBar } from 'react-native';
import { SessionProvider } from '@/contexts/auth-context';
import Provider from './provider';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ScrollView automaticallyAdjustsScrollIndicatorInsets contentInsetAdjustmentBehavior='automatic'>
      <Provider>
        <Slot />
      </Provider>
    </ScrollView>
  )
}
