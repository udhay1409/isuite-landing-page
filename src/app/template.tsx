'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import * as fbq from '@/lib/fpixel'

export default function Template({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    useEffect(() => {
        // Initialize Facebook Pixel when the component mounts
        fbq.initFacebookPixel()
    }, [])

    useEffect(() => {
        // Track pageview on route change
        fbq.pageview()
    }, [pathname])

    return <>{children}</>
}