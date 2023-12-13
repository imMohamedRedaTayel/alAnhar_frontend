import ChooseUS from '@/components/home/chooseUS'
import Contact from '@/components/home/contact'
import Hero from '@/components/home/hero'
import Map from '@/components/home/map'
import Process from '@/components/home/process'
import Services from '@/components/home/services'
import Testimonials from '@/components/home/testimonials'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'


import React from 'react'

export default function Home(){
  return (
    <>
    <Hero/>
    <Services/>
    <ChooseUS/>
    <Process/>
    <Testimonials/>
    <Contact/>
    <Map/>
  </>
  )
}


// export default Home


export async function getServerSideProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'home',
      ])),
    },
  }
}