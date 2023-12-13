import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const ActiveLink = ({ href, children }) => {

    const { asPath } = useRouter()
    return <>
        <Link href={href} className={` nav-link ${href === asPath ? 'active' : ''}`}>{children}</Link>
    </>
}

export default ActiveLink