import React from 'react';
import Head from 'expo-router/head';
import ContactResultWrapper from '@/features/contact/components/contact-result-wrapper';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';

export default function Page() {

  const { loading } = useLoading()

  if (process.env.EXPO_OS === "web") {
    return <ContactResultWrapper />
  }
  
  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <ContactResultWrapper />
    </>
  );
} 