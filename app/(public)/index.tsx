import React from 'react';
import HomeWrapper from '@/features/home/components/home-wrapper';
import { router } from 'expo-router';
import Head from 'expo-router/head';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';
import { useSession } from '@/contexts/auth-context';

export default function Page() {

  const { auth, session } = useSession()

  console.log('auth: ', auth)
  console.log('session: ', session)

  const { loading } = useLoading()

  if (process.env.EXPO_OS === "web") {
    return <HomeWrapper />
  }

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <HomeWrapper isMobile={true} />
    </>
  );
} 