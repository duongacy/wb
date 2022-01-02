import React from 'react'
import { IconProps } from '../../../../formatTypes/icon'

const CheckedOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 7.45143V8.00343C13.9993 9.29729 13.5803 10.5562 12.8056 11.5925C12.0309 12.6288 10.942 13.3869 9.70121 13.7538C8.46046 14.1206 7.13435 14.0766 5.92068 13.6282C4.70701 13.1798 3.67079 12.3511 2.96658 11.2657C2.26236 10.1803 1.92787 8.89627 2.01301 7.60522C2.09814 6.31417 2.59832 5.08523 3.43897 4.10168C4.27961 3.11813 5.41567 2.43266 6.67771 2.14752C7.93975 1.86238 9.26016 1.99284 10.442 2.51943" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13.9999 3.20349L7.99995 9.20949L6.19995 7.40949" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'MEDIUM':
            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28 14.9029V16.0069C27.9985 18.5946 27.1606 21.1125 25.6112 23.1851C24.0618 25.2576 21.8839 26.7738 19.4024 27.5075C16.9209 28.2412 14.2687 28.1531 11.8414 27.2564C9.41402 26.3596 7.34158 24.7022 5.93315 22.5313C4.52472 20.3605 3.85575 17.7925 4.02601 15.2104C4.19627 12.6283 5.19665 10.1705 6.87794 8.20335C8.55922 6.23625 10.8313 4.86533 13.3554 4.29504C15.8795 3.72476 18.5203 3.98567 20.884 5.03887" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M27.9999 6.40686L15.9999 18.4189L12.3999 14.8189" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}

export default CheckedOutline