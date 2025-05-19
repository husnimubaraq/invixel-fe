import React from 'react';
import Head from 'expo-router/head';
import ScheduleWrapper from '@/features/schedule/components/schedule-wrapper';
import { Toaster } from 'sonner'

export default function Page() {
  return (
    <>
      <ScheduleWrapper/>
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