import React from 'react'
import { IconProps } from '../../../../formatTypes/icon'

const MoreHorizontalOutline: React.FC<IconProps> = ({ size = 'SMALL' }) => {
    switch (size) {
        case 'SMALL':
            return <svg width={16} height={16} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8.00021 9C8.58498 9 9.05902 8.55228 9.05902 8C9.05902 7.44772 8.58498 7 8.00021 7C7.41545 7 6.94141 7.44772 6.94141 8C6.94141 8.55228 7.41545 9 8.00021 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.9411 9C13.5259 9 13.9999 8.55229 13.9999 8C13.9999 7.44772 13.5259 7 12.9411 7C12.3564 7 11.8823 7.44772 11.8823 8C11.8823 8.55229 12.3564 9 12.9411 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.05881 9C3.64357 9 4.11762 8.55229 4.11762 8C4.11762 7.44772 3.64357 7 3.05881 7C2.47404 7 2 7.44772 2 8C2 8.55229 2.47404 9 3.05881 9Z" fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'MEDIUM':
            return <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        case 'LARGE':
            return <svg width={32} height={32} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.9994 17C16.6408 17 17.1607 16.5523 17.1607 16C17.1607 15.4477 16.6408 15 15.9994 15C15.3581 15 14.8381 15.4477 14.8381 16C14.8381 16.5523 15.3581 17 15.9994 17Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M26.8388 17C27.4802 17 28.0001 16.5523 28.0001 16C28.0001 15.4477 27.4802 15 26.8388 15C26.1974 15 25.6775 15.4477 25.6775 16C25.6775 16.5523 26.1974 17 26.8388 17Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.1613 17C5.80267 17 6.3226 16.5523 6.3226 16C6.3226 15.4477 5.80267 15 5.1613 15C4.51993 15 4 15.4477 4 16C4 16.5523 4.51993 17 5.1613 17Z" fill="currentColor" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
            </svg>
    }
}

export default MoreHorizontalOutline