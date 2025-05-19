import React, { useState } from 'react';
import Head from 'expo-router/head';
import ContactWrapper from '@/features/contact/components/contact-wrapper';
// import ContactWrapper from '@/features/contact/components/contact-wrapper';
// import { useLoading } from '@/hooks/use-loading';
// import { Loading } from '@/components/loading';
// import { TRegisterRequest } from '@/features/contact/types/register';
// import { useMutation } from '@tanstack/react-query';
// import { registerRequest } from '@/features/contact/apis/register';
// import Toast from 'react-native-toast-message';

export default function Page() {


  if (process.env.EXPO_OS === "web") {
    return <ContactWrapper />
  }

  // return (
  //   <>
  //     <Head>
  //       <title>Contact Us</title>
  //       <meta name="description" content="This is company profile." />
  //     </Head>
  //     {loading && <Loading />}
  //     <ContactWrapper token={token} onRegister={onRegister} isMobile={true} />
  //   </>
  // );
} 