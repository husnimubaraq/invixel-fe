import HomeWrapper from '@/features/home/components/home-wrapper';
import React from 'react';
// import HomeWrapper from '@/features/home/components/home-wrapper';
// import { router } from 'expo-router';
// import Head from 'expo-router/head';
// import { useLoading } from '@/hooks/use-loading';
// import { Loading } from '@/components/loading';

export default function Page() {

  if (process.env.EXPO_OS === "web") {
    return <HomeWrapper />
  }
} 