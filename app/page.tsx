'use client';

import ContentComponent from '@/components/base/content';
import FooterComponent from '@/components/base/footer';
import HeaderComponent from '@/components/base/header';
import AOS from 'aos';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <>
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </>
  )
}
