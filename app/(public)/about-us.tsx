import React from 'react';
import Head from 'expo-router/head';
import AboutWrapper from '@/features/about/components/about-wrapper';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';

export default function Page() {

  const { loading } = useLoading()

  if (process.env.EXPO_OS === "web") {
    return (
      <>
        <Head>
          <title>About Us</title>
          <meta name="description" content="This is company profile." />
        </Head>
        <AboutWrapper />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>About Us</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <AboutWrapper isMobile={true} />
    </>
  );
} 