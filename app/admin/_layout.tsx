import { Slot, Stack } from "expo-router";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout({
  segment
}: {
  segment: string;
}) {

  if (process.env.EXPO_OS === "web") {
    return (
      <ScrollView automaticallyAdjustsScrollIndicatorInsets contentInsetAdjustmentBehavior='automatic'>
        <Slot />
      </ScrollView>
    )
  }

  return (
    <>
      <StatusBar
        barStyle="dark-content"
      />
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <SafeAreaProvider>
          <Stack
            initialRouteName="(admin)"
          >
            <Stack.Screen
              name="(admin)"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="login"
              options={{ headerShown: false }}
            />
          </Stack>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  )
}