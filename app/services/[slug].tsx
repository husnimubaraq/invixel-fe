import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
// import { Loading } from '@/components/loading';
import ServiceWrapper from '@/features/services/components/service-wrapper';
// import { useLoading } from '@/hooks/use-loading';

export default function Page() {
    const { slug } = useLocalSearchParams()

    if (process.env.EXPO_OS === "web") {
        return <ServiceWrapper slug={slug as string} />
    }

    // return (
    //     <>
    //         {loading && <Loading />}
    //         <ServiceWrapper isMobile={true} slug={slug as string} />
    //     </>
    // )
}