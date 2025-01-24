import React from 'react';
import ChatMessageWrapper from '@/features/chat-message/components/chat-message-wrapper';
import Head from 'expo-router/head';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';
import { useSession } from '@/contexts/auth-context';

export default function Page() {

  const { session } = useSession()

  const { loading } = useLoading()

  if (process.env.EXPO_OS === "web") {
    return <ChatMessageWrapper token={session ?? null} />
  }

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      {loading && <Loading />}
      <ChatMessageWrapper token={session ?? null} />
    </>
  );
} 