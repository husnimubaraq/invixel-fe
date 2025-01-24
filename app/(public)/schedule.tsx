import React from 'react';
import Head from 'expo-router/head';
import ScheduleWrapper from '@/features/schedule/components/schedule-wrapper';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';

export default function Page() {

  const { loading } = useLoading()

  if (process.env.EXPO_OS === "web") {
    return <ScheduleWrapper />
  }

  return (
    <>
      <Head>
        <title>Schedule</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <ScheduleWrapper isMobile={true} />
    </>
  );
} 