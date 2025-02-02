import React, { useState } from 'react';
import Head from 'expo-router/head';
import ScheduleWrapper from '@/features/schedule/components/schedule-wrapper';
import { useLoading } from '@/hooks/use-loading';
import { Loading } from '@/components/loading';
import { createBookingRequest } from '@/features/schedule/apis/schedule';
import { TCreateBooking } from '@/features/schedule/types/schedule';
import { useMutation } from '@tanstack/react-query';
import { Toaster, toast } from 'sonner'

export default function Page() {

  const [step, setStep] = useState(1);

  const { loading } = useLoading()

  const { mutate, isPending } = useMutation({
    mutationFn: (request: TCreateBooking) => createBookingRequest(request),
    onSuccess: (response) => {
      if (response.status === 201) {
        setStep(3)
      } else {
        let message = response.data.message

        if (typeof response.data.message === 'object')
          message = response.data.message.join('\n')
        toast.error(message)
      }
    },
  })

  const onSubmit = (data: TCreateBooking) => {
    mutate(data)
  }

  if (process.env.EXPO_OS === "web") {
    return (
      <>
        <ScheduleWrapper
          onSubmit={onSubmit}
          isPending={isPending}
          step={step}
          setStep={setStep}
        />
        <Toaster
          style={{
            whiteSpace: 'pre-line',
          }}
          invert
          richColors
          duration={3000}
          position='bottom-right'
          toastOptions={{
            className: '-bottom-[200px] lg:-bottom-[350px]'
          }}
        />
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Schedule</title>
        <meta name="description" content="This is company profile." />
      </Head>
      {loading && <Loading />}
      <ScheduleWrapper
        onSubmit={onSubmit}
        isMobile={true}
        step={step}
        setStep={setStep}
      />
    </>
  );
} 