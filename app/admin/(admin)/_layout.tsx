import { Loading } from "@/components/loading";
import { useSession } from "@/contexts/auth-context";
import { Redirect, Slot, Stack } from "expo-router";
import { ScrollView, StatusBar } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout({
  segment
}: {
  segment: string;
}) {

  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Loading/>
  }

  if (!session) {
    return <Redirect href="/admin/login" />;
  }

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
            screenOptions={{
              animation: 'fade',
              headerShown: false,
              // header() {
              //   return <Header />
              // },
            }}
          >
            <Stack.Screen
              name="index"
            />
          </Stack>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  )
}