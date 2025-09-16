export const FB_PIXEL_ID = '1070035935342574'

type FacebookPixelOptions = Record<string, string | number | boolean>

interface FacebookPixel {
    (action: 'init', pixelId: string): void;
    (action: 'track', eventName: string, options?: FacebookPixelOptions): void;
    callMethod?: (action: string, eventName: string, options?: FacebookPixelOptions) => void;
    queue?: [string, string, FacebookPixelOptions?][];
    push?: FacebookPixel;
    loaded?: boolean;
    version?: string;
}

declare global {
    interface Window {
        fbq: FacebookPixel;
        _fbq: FacebookPixel;
    }
}

// https://developers.facebook.com/docs/facebook-pixel/implementation
export const pageview = () => {
    window.fbq('track', 'PageView')
}

// https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking
export const event = (name: string, options: FacebookPixelOptions = {}) => {
    window.fbq('track', name, options)
}

// Initialize Facebook Pixel
export const initFacebookPixel = () => {
    if (typeof window !== 'undefined') {
        // Check if fbq is already initialized
        if (!window.fbq) {
            // Create the fbq function
            window.fbq = (...args: [string, string, FacebookPixelOptions?]) => {
                if (window.fbq.callMethod) {
                    window.fbq.callMethod(...args)
                } else if (window.fbq.queue) {
                    window.fbq.queue.push(args)
                }
            }
            window._fbq = window.fbq
            window.fbq.push = window.fbq
            window.fbq.loaded = true
            window.fbq.version = '2.0'
            window.fbq.queue = []
        }

        // Load the Facebook Pixel script
        const script = document.createElement('script')
        script.async = true
        script.src = 'https://connect.facebook.net/en_US/fbevents.js'
        document.head.appendChild(script)

        // Initialize the pixel
        window.fbq('init', FB_PIXEL_ID)
        
        // Track initial pageview
        pageview()
    }
}