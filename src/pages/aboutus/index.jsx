import AboutusPage from '@/components/aboutUs/aboutus'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'



const index = () => {
  return (
    <AboutusPage/>
  )
}

export default index

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
