"use dom"

import React from 'react';
import HeroSection from '@/features/home/components/hero-section';
import AboutSection from '@/features/home/components/about-section';
import ServiceSection from '@/features/home/components/service-section';
import ClientSection from '@/features/home/components/client-section';
import ContactSection from '@/features/home/components/contact-section';
import { LayoutWrapper, LayoutWrapperMobile } from '@/layouts/public/components/layout-wrapper';
import ScheduleSection from '../schedule-section';

export default function HomeWrapper({ isMobile }: { isMobile?: boolean }) {

    return (
        <LayoutWrapper>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ClientSection />
            <ContactSection />
            <ScheduleSection />
        </LayoutWrapper>
    )
}