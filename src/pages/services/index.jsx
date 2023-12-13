import ServicesPage from '@/components/services/servicesPage'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react'

const index = () => {
  return <>
    <ServicesPage/>
  </>
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