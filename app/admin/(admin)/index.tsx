import React from 'react';
import ChatMessageWrapper from '@/features/chat-message/components/chat-message-wrapper';
import Head from 'expo-router/head';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';
import { useSession } from '@/contexts/auth-context';

export default function Page() {

  const { session, signOut } = useSession()

  const { loading } = useLoading()

  const onLogout = () => {
    signOut()
  }

  if (process.env.EXPO_OS === "web") {
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <ChatMessageWrapper onLogout={onLogout} token={session ?? null} />
      </>
    )
  }

  return (
    <>
      {loading && <Loading />}
      <ChatMessageWrapper onLogout={onLogout} token={session ?? null} />
    </>
  );
} 