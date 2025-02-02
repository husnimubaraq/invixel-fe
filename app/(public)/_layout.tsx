import SidebarMobile from "@/layouts/public/components/sidebar-mobile";
import { Redirect, Slot, Stack } from "expo-router";
import React from "react";
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
            screenOptions={{
              animation: 'fade',
              headerShown: false,
            }}
          >
            <Stack.Screen
              name="index"
            />
            <Stack.Screen
              name="services/[slug]"
            />
            <Stack.Screen
              name="about-us"
            />
            <Stack.Screen
              name="contact-us/index"
            />
          </Stack>
        </SafeAreaProvider>
      </SafeAreaView>
    </>
  )
}