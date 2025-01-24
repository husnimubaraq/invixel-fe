import React, { useState } from 'react';
import Head from 'expo-router/head';
import ContactWrapper from '@/features/contact/components/contact-wrapper';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';
import { TRegisterRequest } from '@/features/contact/types/register';
import { useMutation } from '@tanstack/react-query';
import { registerRequest } from '@/features/contact/apis/register';
import Toast from 'react-native-toast-message';


export default function Page() {

  const { loading } = useLoading()
  const [token, setToken] = useState<string | null>(null)

  const { mutate, isPending } = useMutation({
    mutationFn: (params: TRegisterRequest) => registerRequest(params),
    onSuccess: async (response) => {
      console.log('response: ', response)
      if (response.status === 200) {
        setToken(response.data.token)
      } else {
        Toast.show({
          type: 'error',
          text1: response.data.message,
        });
      }
    },
    onError: (error: any) => {
      console.log('error: ', error)
      Toast.show({
        type: 'error',
        text1: error.response.data.message,
      });
    }
  })

  const onRegister = (data: TRegisterRequest) => {
    mutate(data)
  }

  if (process.env.EXPO_OS === "web") {
    return <ContactWrapper token={token} onRegister={onRegister} />
  }

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <ContactWrapper token={token} onRegister={onRegister} isMobile={true} />
    </>
  );
} 